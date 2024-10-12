import { useEffect, useState } from 'react'

import Filter from './components/Filter'

import Countries from './components/Countries'

import countries_data from './services/countries_module'

const App = () => {

  const [countries, setCountries] = useState([])

  const hook = () => {
countries_data
      .getData()
      .then(
        initialCountryData => {
          console.log(initialCountryData);
          setCountries(initialCountryData)
        })
  }

  useEffect(hook, [])

  const [newSearch, setNewSearch] = useState('')

  const handleSearchBarChange = (event) => {
    event.preventDefault()
    const newValue = event.target.value
    setNewSearch(newValue)
    console.log(newValue)
  }

  const filteredNames = countries.filter(country =>
    country.name?.common?.toLowerCase().includes(newSearch.toLowerCase())
  )

  return (
    <div>

      <Filter newSearch={newSearch} handleSearchBarChange={handleSearchBarChange} />

      <Countries filteredNames={filteredNames} />

    </div>
  )

}
export default App
