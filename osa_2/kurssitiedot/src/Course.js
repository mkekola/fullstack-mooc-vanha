const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => {
  let total = 0;
  parts.forEach((part) => {
    total += part.exercises;
  });

  return <strong>total of {total} exercises</strong>;
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

export const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};
