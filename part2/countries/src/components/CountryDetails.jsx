const CountryDetails = ({ country }) => {
  if (!country) {
    return null
  }

  return (
      <div>
        <h2>
          {country.name.common}
        </h2>
        <div style={{fontSize: "3em"}}>{country.flag}</div>
        <div>Capital: {country.capital[0]}</div>
        <div>Area: {country.area}</div>
        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
        </ul>
      </div>
    )
}

export default CountryDetails