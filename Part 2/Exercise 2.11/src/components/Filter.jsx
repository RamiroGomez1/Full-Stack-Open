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
  
  export default Filter