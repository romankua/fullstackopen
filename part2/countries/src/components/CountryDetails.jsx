const CountryDetails = ({ country }) => {
  return (
      <div>
        <h2>
          {country.name.common}
        </h2>
        <div>Capital: {country.capital[0]}</div>
        <div>Area: {country.area}</div>
        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
        </ul>
        <div style={{fontSize: "100pt"}}>{country.flag}</div>
      </div>
    )
}

export default CountryDetails