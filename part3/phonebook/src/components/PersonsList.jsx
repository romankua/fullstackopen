const Person = ({ person: { id, name, number  }, onDelete }) => {
  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
      <span>{ onDelete ? <button onClick={() => onDelete(id)}>delete</button> : null }</span>
    </li>
  )
}

const PersonsList = ({ persons, onDelete }) => {
  return (
    <div className='container'>
      <h2>Numbers</h2>
      <ul className="display-table col-12">
        {persons.map(p => <Person key={p.id} person={p} onDelete={onDelete} />)}
      </ul>
    </div>
  )
}

export default PersonsList