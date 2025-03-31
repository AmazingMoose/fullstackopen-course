import React from 'react'
import PropTypes from 'prop-types'

const PersonForm = ({
  onSubmit, 
  newName, 
  onNameChange, 
  newNumber, 
  onNumberChange
}) => {
  return (
      <div>
          <h2>add a new</h2>
          <form onSubmit={onSubmit}>
              <div>
              name: <input value={newName} onChange={onNameChange}/>
              </div>
              <div>
              number: <input value={newNumber} onChange={onNumberChange}/>
              </div>
              <div>
              <button type="submit">add</button>
              </div>
          </form>
      </div>
  )
}

PersonForm.propTypes = {
  onSubmit: PropTypes.func,
  newPerson: PropTypes.string,
  onNameChange: PropTypes.func,
  newNumber: PropTypes.string,
  onNumberChange: PropTypes.func
}

export default PersonForm