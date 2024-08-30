import { useState } from 'react'

const Numbers = ({ persons }) => {
  return (
    <li>{persons.name}</li>
  )
}

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleAddPerson = (event) => {
    event.preventDefault()
    const isAlreadyAdded = persons.some(x => x.name === newName)
    isAlreadyAdded
      ? alert(`${newName} is already added to phonebook`)
      : addName();
  }

  const addName = () => {

    const nameObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const logPersons = () => console.log(persons)

  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleAddPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>

      <button onClick={logPersons}>log array</button>

      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(x => <li>{x.name} {x.number}</li>)}
        </ul>
      </div>

    </div>
  )
}

export default App