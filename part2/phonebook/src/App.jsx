import { useEffect, useState } from 'react'
import personService from './services/persons'
import NewPersonForm from './components/NewPersonForm'
import PersonsList from './components/PersonsList'
import DisplayOptions from './components/DisplayOptions'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  // {message: "Some text", category: "info|success|error"}
  const [notification, setNotification] = useState({})
  
  const handleError = ({ error, person }) => {
    console.log("Error: ", error.message)

    if (error.response && error.response.status === 404 && person) {
      error = {
        ...error,
        message: `Information of ${person.name} has already been removed from server`
      }
    }
    
    setNotification({message: `Error: ${error.message}. Refresh the page and try again.`, category: "error"})
  }

  const notifySuccess = (message) => {
    setNotification({ message, category: "success" });
    setTimeout(() => {
      setNotification({});
    }, 2000);
  }

  const loadPersons = () => {
    personService
      .getAll()
      .then(data => {
        setPersons(data)
        notifySuccess("Data loaded")
      })
      .catch(error => handleError({ error }))
  }

  const addPerson = (person) => {
    personService
      .add(person)
      .then(data => {
        setPersons(persons.concat(data))
        notifySuccess(`Added ${person.name}`)
      })
      .catch(error => handleError({ error }))
  }

  const updatePerson = (person) => {
    personService
      .update(person)
      .then(data => {
        setPersons(persons.map(p => p.id === data.id ? data : p))
        notifySuccess(`Updated ${person.name}`)
      })
      .catch(error => handleError({ error, person }))
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
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
        notifySuccess(`Removed ${person.name}`)
      })
      .catch(error => {
        handleError({ error, person })
      })
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
    <div className='container col-6'>
      <h1 className='app-title'>Phonebook</h1>
      <Notification message={notification.message} category={notification.category} />
      <NewPersonForm addPerson={handleAddPerson} />
      <DisplayOptions value={filter} onChange={setFilter}/>
      <PersonsList 
        persons={persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))}
        onDelete={deletePerson} />
    </div>
  )
}

export default App