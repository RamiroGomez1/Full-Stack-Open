
const Header = ({ course }) => {

  console.log('prueba header')


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






const Content = ({sections}) => {

  
  return (
    
    <div>
      <Part index={0} sections={sections} />

      <Part index={1} sections={sections} />

      <Part index={2} sections={sections} />
    </div>      

)
}  



const Part = ({sections, index}) => {
  
  return (
    <>
      <p>
        {sections[index].part}: {sections[index].exercises}
      </p>
    </>    
  )
}  








const App = () => {
  const course = 'Half Stack application development'
  const sections = [
    
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

  const exercisesTotal = sections[0].exercises + sections[1].exercises + sections[2].exercises
  
  return (
    <div>
      <Header course={course} />
      <Content sections={sections} /> 
      <Total exercisesTotal={exercisesTotal} />
    </div>
  )
}

export default App