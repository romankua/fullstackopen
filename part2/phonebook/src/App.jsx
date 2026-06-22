import { useState } from 'react'
import NewPersonForm from './components/NewPersonForm'
import PersonsList from './components/PersonsList'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [filter, setFilter] = useState('')
  
  const handleAddPerson = ({ name, number }) => {
    if (persons.findIndex(p => p.name.toLowerCase() === name.toLowerCase()) !== -1) {
      alert(`${name} is already added to phonebook`)
      return false
    }

    const person = {
      name,
      number
    }
    setPersons(persons.concat(person))

    return true
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={setFilter}/>
      <NewPersonForm addPerson={handleAddPerson} />
      <PersonsList persons={persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))} />
    </div>
  )
}

export default App