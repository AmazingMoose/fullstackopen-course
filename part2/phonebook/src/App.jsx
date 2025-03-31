import React, { useEffect, useState } from 'react'
import personService from './services/persons'
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

  useEffect(() => {
    personService
      .getAll()
      .then(allPersons => setPersons(allPersons))
  }, [])
  console.log(persons)

  const addPerson = (event) => {
    event.preventDefault()
    for (const person of persons) {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`)
        return
      }
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      }
    )
  }

  const handleDelete = (event, person) => {
    event.preventDefault()
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then(deletedPerson => {
            setPersons(persons.filter(person => person.id !== deletedPerson.id))
            setNewName('')
            setNewNumber('')
          }
        )
    }
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
      <Persons personList={filteredPersons} onDelete={handleDelete}/>
    </div>
  )
}

export default App