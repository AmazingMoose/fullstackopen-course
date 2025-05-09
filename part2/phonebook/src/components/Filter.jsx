import React from 'react'
import PropTypes from 'prop-types'

const Filter = ({value, onChange}) => (
  <div>
    filter shown with <input value={value} onChange={onChange}/>
  </div>
)

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Filter