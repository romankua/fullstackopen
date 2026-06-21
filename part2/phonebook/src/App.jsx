import { useState } from 'react'
import NewPersonForm from './components/NewPersonForm'
import PersonsList from './components/PersonsList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  
  const handleAddPerson = (name) => {
    if (persons.findIndex(p => p.name.toLowerCase() === name.toLowerCase()) !== -1) {
      alert(`${name} is already added to phonebook`)
      return
    }

    const person = {
      name
    }
    setPersons(persons.concat(person))
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <NewPersonForm addPerson={handleAddPerson} />
      <PersonsList persons={persons} />
    </div>
  )
}

export default App