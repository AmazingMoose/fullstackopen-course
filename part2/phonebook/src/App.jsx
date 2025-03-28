import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)
  const handleFilterChange = event => setFilter(event.target.value)

  const phonebookHook = () => {
    console.log('effect')
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
      console.log('effect fullfilled')
    })
  }

  useEffect(phonebookHook, [])
  console.log(persons)

  const addPerson = (event) => {
    event.preventDefault()

    for (const person of persons) {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`)
        return
      }
    }

    setPersons(persons.concat({
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }))
  }

  const filteredPersons = filter === '' 
    ? persons 
    : persons.filter(person => person.name
                        .toLowerCase()
                        .includes(filter.toLowerCase())
                    )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm 
        onSubmit={addPerson}
        newName={newName}
        onNameChange={handleNameChange}
        newNumber={newNumber}
        onNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons personList={filteredPersons}/>
    </div>
  )
}

export default App