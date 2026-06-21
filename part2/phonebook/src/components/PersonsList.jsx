const Person = ({ person: { name } }) => {
  return (
    <li>
      {name}
    </li>
  )
}

const PersonsList = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(p => <Person key={p.name} person={p} />)}
      </ul>
    </div>
  )
}

export default PersonsList