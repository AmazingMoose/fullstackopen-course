const express = require('express')
const app = express()

app.use(express.json())

const generateId = () => {
    return Math.round(Math.random() * 10_000_000_000)
}

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

app.get('/', (req, res) => {
    res.send('nothing here yet')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const personId = req.params.id
    const person = persons.find(person => person.id === personId)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.post('/api/persons/', (req, res) => {
    const payload = req.body
    
    if (!payload || !payload.name || !payload.number) {
        return res.status(400).json({
            error: 'content missing'
        })
    }

    const sameNamePerson = persons.find(person => person.name === payload.name)

    if (sameNamePerson) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        id: generateId(),
        name: payload.name,
        number: payload.number,
    }

    persons = persons.concat(person)

    res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
    const personId = req.params.id
    persons = persons.filter(person => person.id != personId)
    res.status(204).end()
})

app.get('/info', (req, res) => {
    const datetime = new Date()
    res.send(`<div>Phonebook has info for ${persons.length} people</div><div>${datetime}</div>`)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`)
})