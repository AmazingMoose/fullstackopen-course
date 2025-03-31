import React from 'react'
import PropTypes from 'prop-types'

const Persons = ({personList, onDelete}) => {
  const label = 'delete person'
  return (
    <div>
      {
        personList.map(person => 
          <div key={person.id}>
            {person.name} {person.number}
            <button onClick={(event) => onDelete(event, person)}>{label}</button>  
          </div>
        )
      }
    </div>
  )
}

Persons.propTypes = {
  personList: PropTypes.object,
  onDelete: PropTypes.func
}

export default Persons