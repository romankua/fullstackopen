const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(express.static('client'))

morgan.token('body', req => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
  {
    "id": "1",
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": "2",
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": "3",
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": "4",
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

app.get('/info', (request, response) => {
  const currentTime = new Date()
  const buffer = `Phonebook has info for ${persons.length} people<br/><br/>${currentTime}`
  response.send(buffer)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(p => p.id === id)

  if (!person) {
    return response.status(404).end()
  }

  response.json(person)
})

app.post('/api/persons', (request, response) => {
  const person = {
    name: request.body.name,
    number: request.body.number
  }
  
  if (!person.name) {
    return response.status(400).send({ error: 'name is required' })
  }

  if (!person.number) {
    return response.status(400).send({ error: 'number is required' })
  }

  const exists = persons.find(p => p.name.toLowerCase() === person.name.toLowerCase()) 

  if (exists) {
    return response.status(400).send({ error: 'name must be unique' })
  }

  person.id = `${Math.floor(Math.random() * 10000)}`
  persons.push(person)

  response.status(201).send(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(p => p.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
