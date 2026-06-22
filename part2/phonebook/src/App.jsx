import { useEffect, useState } from 'react'
import axios from 'axios'
import NewPersonForm from './components/NewPersonForm'
import PersonsList from './components/PersonsList'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  const loadPersons = () => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => setPersons(response.data))
  }

  useEffect(loadPersons, [])
  
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