const Header = ({ course: {name} }) => {
  return (
    <>
      <h2>{name}</h2>
    </>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  )
}
const Content = ({ course: { parts } }) => {
  return (
    <>
      {parts.map(p => <Part key={p.id} name={p.name} exercises={p.exercises} />)}
    </>
  )
}

const Total = ({ course: { parts } }) => {
  return (
    <>
      <p><b>Total of {parts.reduce((acc, p) => acc += p.exercises, 0)} exercises</b></p>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course