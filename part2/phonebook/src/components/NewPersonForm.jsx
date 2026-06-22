import { useState } from 'react'

const NewPersonForm = ({ addPerson }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleAddName = (e) => {
    e.preventDefault()
    if (addPerson({ name: newName, number: newNumber })) {
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Add a new person</h2>
      <form onSubmit={handleAddName}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default NewPersonForm