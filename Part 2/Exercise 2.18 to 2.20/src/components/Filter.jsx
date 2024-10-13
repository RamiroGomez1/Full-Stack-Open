const Filter = ({ newSearch, filteredNames, message, handleSearchBarChange }) => {

if(filteredNames.length < 10) message = null

    return (
      <div>
        <h1>find countries</h1>
        <input placeholder='Search a name' value={newSearch} onChange={handleSearchBarChange} />
        <p>{message}</p>
      </div>
    )
  }
  
  export default Filter