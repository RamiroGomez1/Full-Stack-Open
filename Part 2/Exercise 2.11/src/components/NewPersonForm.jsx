const NewPersonForm = ({ handleAddPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
    return (
      <div>
  
        <form onSubmit={handleAddPerson}>
          <div>
            name: <input type="text" value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number: <input type="number" value={newNumber} onChange={handleNumberChange} />
          </div>
          <div>
            <button type='submit'>add</button>
          </div>
        </form>
  
      </div>
    )
  }

  export default NewPersonForm