const CountryList = ({ countries, filter, onShowDetails }) => {
  if (!countries) {
    return null
  }

  if (countries.length === 0) {
    return null
  }

  if (!filter) {
    return null
  }

  const filtered = countries.filter(c => c.name && c.name.common && c.name.common.toLowerCase().includes(filter))

  if (filtered.length === 1) {
    onShowDetails(filtered[0])
    return null
  }

  if (filtered.length > 10) {
    return (
      <div>
        <div>Too many matches, specify another filter</div>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {filtered.map(c => <li key={c.cca3}>{c.name.common} <button onClick={() => onShowDetails(c)}>Show</button></li>)}
      </ul>
    </div>
  )
}

export default CountryList