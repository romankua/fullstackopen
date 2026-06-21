import { useState } from 'react'
import NewPersonForm from './components/NewPersonForm'
import PersonsList from './components/PersonsList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  
  const handleAddPerson = (name) => {
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