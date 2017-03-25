import React, { PropTypes } from 'react'

const Example = ({ number, increaseNumber }) => (
  <div>
    [ - {number} - ] <button onClick={() => increaseNumber(5)}>Increase + 5</button>
  </div>
)

Example.propTypes = {
  number: PropTypes.number.isRequired,
  increaseNumber: PropTypes.func.isRequired
}

export default Example