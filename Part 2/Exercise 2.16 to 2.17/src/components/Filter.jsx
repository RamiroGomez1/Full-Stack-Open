const Filter = ({ newSearch, filteredNames, handleSearchBarChange }) => {

    return (
      <div>
        <input placeholder='Search a name' value={newSearch} onChange={handleSearchBarChange} />
  
  
        <ul>
  
          {newSearch &&
            <ul>
              {filteredNames.map(item =>
              (<li key={item.id}>
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