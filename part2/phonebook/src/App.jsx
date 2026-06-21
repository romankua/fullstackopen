import { useState } from 'react'
import NewPersonForm from './components/NewPersonForm'
import PersonsList from './components/PersonsList'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '044-123-45-67'
    }
  ]) 
  
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
      <NewPersonForm addPerson={handleAddPerson} />
      <PersonsList persons={persons} />
    </div>
  )
}

export default App