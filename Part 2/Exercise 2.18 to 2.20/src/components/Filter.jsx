const Filter = ({ newSearch, filteredNames, handleSearchBarChange }) => {

    return (
      <div>
        <input placeholder='Search a name' value={newSearch} onChange={handleSearchBarChange} />
      </div>
    )
  }
  
  export default Filter