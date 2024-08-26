const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <ul>
        {course.parts.map((part) =>
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        )}
      </ul>
      <p>Number of exercises: {course.parts.reduce((x, y) => x + y.exercises, 0)}</p>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course[0]} />
      <Content course={course[0]} />
      <Header course={course[1]} />
      <Content course={course[1]} />
    </div>
  )
}

export default Course