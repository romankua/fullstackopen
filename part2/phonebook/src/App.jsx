import { useEffect, useState } from 'react'
import personService from './services/persons'
import NewPersonForm from './components/NewPersonForm'
import PersonsList from './components/PersonsList'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  
  const loadPersons = () => {
    personService.getAll()
      .then(data => setPersons(data))
  }

  const addPerson = (person) => {
    personService.add(person)
      .then(data => setPersons(persons.concat(data)))
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)

    if (person === undefined) {
      return
    }
    
    if (window.confirm(`Delete ${person.name}?`) !== true) {
      return
    }

    personService.remove(id)
      .then(() => setPersons(persons.filter(p => p.id !== id)))
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
    addPerson(person)

    return true
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={setFilter}/>
      <NewPersonForm addPerson={handleAddPerson} />
      <PersonsList 
        persons={persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))}
        onDelete={deletePerson} />
    </div>
  )
}

export default App