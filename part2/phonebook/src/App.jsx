import { useEffect, useState } from 'react'
import personService from './services/persons'
import NewPersonForm from './components/NewPersonForm'
import PersonsList from './components/PersonsList'
import DisplayOptions from './components/DisplayOptions'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  
  const handleError = (error) => {
    console.log("Request failed: ", error.message)

    alert("Error happened, try refreshing browser window and repeat the operation.")
  }

  const loadPersons = () => {
    personService
      .getAll()
      .then(data => setPersons(data))
      .catch(error => handleError(error))
  }

  const addPerson = (person) => {
    personService
      .add(person)
      .then(data => setPersons(persons.concat(data)))
      .catch(error => handleError(error))
  }

  const updatePerson = (person) => {
    personService
      .update(person)
      .then(data => setPersons(persons.map(p => p.id === data.id ? data : p)))
      .catch(error => handleError(error))
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)

    if (person === undefined) {
      return
    }
    
    if (window.confirm(`Delete ${person.name}?`) !== true) {
      return
    }

    personService
      .remove(id)
      .then(() => setPersons(persons.filter(p => p.id !== id)))
      .catch(error => handleError(error))
  }

  useEffect(loadPersons, [])
  
  const handleAddPerson = ({ name, number }) => {
    const person = persons.find(p => p.name.toLowerCase() === name.toLowerCase())

    if (person === undefined) {
      const person = {
        name,
        number
      }
      addPerson(person)

      return true
    }

    if (window.confirm(`${name} is already added to phonebook, replace the old number with the new one?`) !== true) {
      return false
    }

    const personUpdate = {
      ...person,
      number
    }
    updatePerson(personUpdate)

    return true
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={setFilter}/>
      <NewPersonForm addPerson={handleAddPerson} />
      <DisplayOptions value={filter} onChange={setFilter}/>
      <PersonsList 
        persons={persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))}
        onDelete={deletePerson} />
    </div>
  )
}

export default App