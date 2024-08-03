
const Header = ({ course }) => {

  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Total = ({ exercisesTotal }) => {


  return (

    <>
      <p>Number of exercises: {exercisesTotal}</p>
    </>

  )
}






const Content = ({parts}) => {

  
  return (
    
    <div>
      <Part index={0} parts={parts} />

      <Part index={1} parts={parts} />

      <Part index={2} parts={parts} />
    </div>      

)
}  



const Part = ({parts, index}) => {
  
console.log('25')

  return (
    <>
      <p>
        {parts[index].part}: {parts[index].exercises}
      </p>
    </>    
  )
}  








const App = () => {

  const course = {

    name : 'Half Stack application development',
  
    parts : [
      
      {
        part: 'Fundamentals of React',
        exercises: 10
      },  
      
      {
        part: 'Using props to pass data',
        exercises: 7
      },  
      
      {
        part: 'State of a component',
        exercises: 14
      }  
      
    ]  
  }

  const exercisesTotal = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  console.log(exercisesTotal)


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} /> 
      <Total exercisesTotal={exercisesTotal} />
    </div>
  )
}

export default App