const PersonForm = () => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = event => setNewName(event.target.value)
    const handleNumberChange = event => setNewNumber(event.target.value)

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

    return (
        <div>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}