import { useEffect, useState } from 'react'

import Filter from './components/Filter'

import RenderCountryData from './components/RenderCountryData'

import Countries from './components/Countries'

import countries_data from './services/countries_module'

const App = () => {

  const [countries, setCountries] = useState([])
  const [message, setMessage] = useState('Too many matches, use another filter')

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
  }

  const filteredNames = countries.filter(country =>
    country.name?.common?.toLowerCase().includes(newSearch.toLowerCase())
  )

  const [countryData_toShow, setCountryData_toShow] = useState('')

  const handleCountryDataName = (event) => {
    event.preventDefault();
    if(filteredNames.length === 1) {
      const countryName = filteredNames[0].name.common;
      setCountryData_toShow(countryName);
      console.log(countryName)
    }
  }

  return (
    <div>

      <Filter filteredNames={filteredNames} message={message} newSearch={newSearch} handleSearchBarChange={handleSearchBarChange} />

      <Countries filteredNames={filteredNames} message={message} />

      <RenderCountryData countryData={countryData_toShow} handleCountryDataName={handleCountryDataName} />

    </div>
  )

}
export default App
