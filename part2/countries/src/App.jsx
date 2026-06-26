import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import Filter from './components/Filter'
import CountryList from './components/CountryList'

function App() {
  const [countryFilter, setCountryFilter] = useState('')
  const [countryList, setCountryList] = useState([])

  const loadCountryList = () => {
    countriesService
      .getAll()
      .then(data => setCountryList(data))
      .catch(e => console.log("Error: ", e))
  }

  useEffect(loadCountryList, [])

  console.log('App rendering...')

  return (
    <div>
      <Filter value={countryFilter} onChange={e => setCountryFilter(e.target.value.toLowerCase())} />
      <CountryList countries={countryList} filter={countryFilter} />
    </div>
  )
}

export default App
