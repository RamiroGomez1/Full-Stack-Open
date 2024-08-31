import { useState } from 'react'






const Filter = ({ newSearch, filteredNames, handleSearchBarChange }) => {

  return (
    <div>
      <input placeholder='Search a name' value={newSearch} onChange={handleSearchBarChange} />


      <ul>

        {newSearch &&
          <ul>
            {filteredNames.map((item, index) =>
            (<li key={index}>
              {item.name} {item.number}
            </li>)
            )}
          </ul>
        }

      </ul>
    </div>
  )
}


const NewPersonForm = ({ handleAddPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <div>

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

    </div>
  )
}

const Persons = ({persons}) => <div><ul>{persons.map(x => <li>{x.name} {x.number}</li>)}</ul></div>



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


  const [newSearch, setNewSearch] = useState('')

  const handleSearchBarChange = (event) => {
    event.preventDefault()
    const newValue = event.target.value
    setNewSearch(newValue)
  }

  const filteredNames = persons.filter(person =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  )

  return (
    <div>

      <h2>Phonebook</h2>

      <Filter newSearch={newSearch} filteredNames={filteredNames} handleSearchBarChange={handleSearchBarChange} />

      <h2>Add a new contact</h2>

      <NewPersonForm handleAddPerson={handleAddPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App