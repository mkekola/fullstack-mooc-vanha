import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  return (
    <>
      <h1> statistics </h1>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={good}></StatisticLine>
            <StatisticLine text="neutral" value={neutral}></StatisticLine>
            <StatisticLine text="bad" value={bad}></StatisticLine>
            <StatisticLine
              text="all"
              value={good + neutral + bad}
            ></StatisticLine>
            <StatisticLine
              text="average"
              value={(good - bad) / (good + neutral + bad)}
            ></StatisticLine>
            <StatisticLine
              text="positive"
              value={(good / (good + neutral + bad)) * 100 + "%"}
            ></StatisticLine>
          </tbody>
        </table>
      )}
    </>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1> give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
