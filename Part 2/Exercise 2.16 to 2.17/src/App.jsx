import { useEffect, useState } from 'react'

import axios from 'axios'

import NewPersonForm from './components/NewPersonForm'

import Persons from './components/Persons'

import Filter from './components/Filter'

import Notification from './components/Notification'

import Error from './components/ErrorMessage'

import persons_data from './services/persons_module'

import '../index.css'



const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)


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
      setMessage('You need to write a name')
      setTimeout(()=>{
        setMessage(null)
      }, 5000)
      return;
    }

const alreadyAddedName_changeNumber = (id) => {

  const person = persons.find(x => x.id === id)
  const changedName_array = {...person, number: newNumber }

  if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
    persons_data
    .changeNumber(id, changedName_array)
    .then(returnedPerson => {
      setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
      setMessage(`Changed ${newName}'s number to ${newNumber}`)
      setTimeout(()=>{
        setMessage(null)
      }, 5000)
      setNewName('')
      setNewNumber('')
    })
  }  
}

  const personToUpdate = persons.find(x => x.name === newName);

    const isAlreadyAdded = persons.some(x => x.name === newName)
    isAlreadyAdded
      ? alreadyAddedName_changeNumber(personToUpdate.id)
      : addName();
  }

  const addName = () => {
    if (newNumber === '') {
      setMessage('You need to write a number')
      setTimeout(()=>{
        setMessage(null)
      }, 5000)
      return;
    }

    const nameObject = {
      name: newName,
      number: newNumber
    }

    persons_data
      .create(nameObject)
      .then(returnedPersonData => {

        setPersons(persons.concat(returnedPersonData))
        setNewName('')
        setNewNumber('')
        setMessage(`Added ${newName} with the number ${newNumber}`)
        setTimeout(()=>{
          setMessage(null)
        }, 5000)
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
  
  const deletePersonData = (id) => {
    event.preventDefault()

    const personToDelete = persons.find(person => person.id === id)

    persons_data
      .del(id)
      .then( response => {
        setPersons(persons.filter(person => person.id !== id))
        setMessage(`Deleted ${personToDelete.name} with the number ${personToDelete.number}`)
        setTimeout(()=>{
          setMessage(null)
        }, 5000)
      })
      .catch(error => {
        console.error("Error deleting person:", error);
        setErrorMessage(`Information of ${personToDelete.name} has already been removed from server`)
      })
  }

  const filteredNames = persons.filter(person =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  )


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newSearch={newSearch} filteredNames={filteredNames} handleSearchBarChange={handleSearchBarChange} />

      <Notification message={message} errorMessage={errorMessage} />

      <Error errorMessage={errorMessage}/>

      <h2>Add a new contact</h2>

      <NewPersonForm handleAddPerson={handleAddPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <Persons persons={persons} deletePersonData={deletePersonData} />
    </div>
  )

}
export default App
