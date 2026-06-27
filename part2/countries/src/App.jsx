import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import Filter from './components/Filter'
import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails'

function App() {
  const [countryFilter, setCountryFilter] = useState('')
  const [countryList, setCountryList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  const loadCountryList = () => {
    countriesService
      .getAll()
      .then(data => setCountryList(data))
      .catch(e => console.log("Error: ", e))
  }

  const handleCountryFilterChange = (e) => {
    setSelectedCountry(null)
    setCountryFilter(e.target.value.toLowerCase())
  }

  useEffect(loadCountryList, [])

  console.log('App rendering...')

  return (
    <div>
      <Filter value={countryFilter} onChange={handleCountryFilterChange} />
      <CountryList countries={countryList} filter={countryFilter} onShowDetails={setSelectedCountry}/>
      {selectedCountry ? <CountryDetails country={selectedCountry}/> : null}
    </div>
  )
}

export default App
