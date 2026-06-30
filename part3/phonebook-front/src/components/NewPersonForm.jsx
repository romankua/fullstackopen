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
    <div className='container'>
      <h2>Add a new person</h2>
      <form onSubmit={handleAddName}>
        <div className="controls-container">
          <div className='controls-row'>
            <label htmlFor='new-name'>Name:</label>
            <input id='new-name' value={newName} onChange={e => setNewName(e.target.value)} />
          </div>
          <div className='controls-row'>
            <label htmlFor='new-number'>Number:</label>
            <input id='new-number' value={newNumber} onChange={e => setNewNumber(e.target.value)} />
          </div>
          <div className='controls-row'>
            <button type="submit">Add</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewPersonForm