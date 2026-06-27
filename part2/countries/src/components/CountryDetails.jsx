import { useState, useEffect } from 'react'
import weatherService from '../services/weather'
import WeatherDetails from './WeatherDetails'

const CountryDetails = ({ country }) => {
  const [currentWeather, setCurrentWeather] = useState(null)

  useEffect(() => {
    const lat = country.capitalInfo.latlng[0]
    const lon = country.capitalInfo.latlng[1]
    weatherService
      .getCurrent({ lat, lon })
      .then(data => setCurrentWeather(data))
  }, [country])

  return (
      <div>
        <h2>{country.name.common}</h2>
        <div>Capital: {country.capital[0]}</div>
        <div>Area: {country.area}</div>
        <div><img src={country.flags.svg} alt={country.flags.alt} style={{height: '100px'}}/></div>
        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
        </ul>
        <WeatherDetails city={country.capital[0]} weather={currentWeather} />
      </div>
    )
}

export default CountryDetails