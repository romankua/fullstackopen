const Person = ({ person: { name, number  } }) => {
  return (
    <li>
      {name} {number}
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