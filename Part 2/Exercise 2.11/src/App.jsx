import { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {
  
const [persons, setPersons] = useState([])


const hook = () => {
    axios
    .get('http://localhost:3001/persons')      
    .then( 
      response =>{
    console.log('promise fulfilled')
    setPersons(response.data)
  })
}

useEffect(hook, [])

  return (
  <div>
    
  </div>    
  )
}
export default App
