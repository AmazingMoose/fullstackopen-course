import React from 'react'
import PropTypes from 'prop-types'

const Persons = ({personList}) => (
  <div>
    {
      personList.map(person => 
        <div key={person.id}>{person.name} {person.number}</div>
      )
    }
  </div>
)

Persons.propTypes = {
    personList: PropTypes.object
}

export default Persons