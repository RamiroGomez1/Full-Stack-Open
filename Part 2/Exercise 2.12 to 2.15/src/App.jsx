import { useEffect, useState } from 'react'

import axios from 'axios'

import NewPersonForm from './components/NewPersonForm'

import Persons from './components/Persons'

import Filter from './components/Filter'

import persons_data from './services/persons_module'


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const hook = () => {
    persons_data
      .getData()
      .then(
        initialPersonData => {
          setPersons(initialPersonData)
        })
  }

  useEffect(hook, [])

  const handleAddPerson = (event) => {
    event.preventDefault()

    if (newName === '') {
      alert('You need to write a name')
      return;
    }


    const isAlreadyAdded = persons.some(x => x.name === newName)
    isAlreadyAdded
      ? alert(`${newName} is already added to phonebook`)
      : addName();

  }

  const addName = () => {
    if (newNumber === '') {
      alert('You need to write a number')
      return;
    }

    const nameObject = {
      name: newName,
      number: newNumber
    }

    axios
      .post('http://localhost:3001/persons', nameObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })

    persons_data
      .create(nameObject)
      .then(returnedPersonData => {

        setPersons(persons.concat(returnedPersonData))
        setNewName('')
      }
      )
  }

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
      <Persons persons={persons} />
    </div>
  )

}
export default App
