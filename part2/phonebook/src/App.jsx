import React, { useEffect, useState } from 'react'
import personService from './services/persons'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState(null)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationColor, setNotificationColor] = useState(null)

  const handleNameChange = event => setNewName(event.target.value)
  const handleNumberChange = event => setNewNumber(event.target.value)
  const handleFilterChange = event => setFilter(event.target.value)

  useEffect(() => {
    personService
      .getAll()
      .then(allPersons => setPersons(allPersons))
  }, [])

  const showNotification = (message, color) => {
    setNotificationMessage(message)
    setNotificationColor(color)
    setTimeout(() => {
      setNotificationMessage(null)
      setNotificationColor(null)
    }, 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson =  {
      name: newName,
      number: newNumber
    }

    const person = persons.find(person => newPerson.name === person.name)

    if (!person) {
      personService
        .create(newPerson)
        .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            showNotification(`Added ${newPerson.name}`, 'green')
            setNewName('')
            setNewNumber('')
          }
      )
      return
    }
    
    const warningMessage = `${person.name} is already added to phonebook, replace the old number with a new one?`
    if (!window.confirm(warningMessage)) {
      return
    }

    personService
      .update(person.id, newPerson)
      .then(returnedPerson => {
          setPersons(
            persons.map(person => person.id === returnedPerson.id 
              ? returnedPerson : person)
            )
            showNotification(`Updated ${returnedPerson.name}`, 'green')
            setNewName('')
            setNewNumber('')
        }
      )
      .catch(error => {
        showNotification(
          `the person ${person.name} was deleted from the phonebook`,
          'red'
        )
        setPersons(persons.filter(p => p.id != person.id))
      })
  }

  const handleDelete = (event, person) => {
    event.preventDefault()
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then(deletedPerson => {
            setPersons(persons.filter(person => person.id !== deletedPerson.id))
            showNotification(`Deleted ${deletedPerson.name}`, 'green')
            setNewName('')
            setNewNumber('')
          }
        )
    }
  }

  if (!persons) {
    return null
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
      <Notification 
        message={notificationMessage} 
        color={notificationColor} 
      />
      <Filter value={filter} onChange={handleFilterChange}/>
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