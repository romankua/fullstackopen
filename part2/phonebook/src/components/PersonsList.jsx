const Person = ({ person: { id, name, number  }, onDelete }) => {
  return (
    <li>
      {name} {number} { onDelete ? <button onClick={() => onDelete(id)}>delete</button> : "" }
    </li>
  )
}

const PersonsList = ({ persons, onDelete }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(p => <Person key={p.id} person={p} onDelete={onDelete} />)}
      </ul>
    </div>
  )
}

export default PersonsList