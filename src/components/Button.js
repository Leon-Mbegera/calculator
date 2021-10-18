import React from 'react'
import Proptypes from 'prop-types'

const Button = ({buttonName}) => {
  return (
    <div>
      <button type='button'>{buttonName}</button>
    </div>
  )
}

Button.propTypes = {
  buttonName: Proptypes.string.isRequired
}

export default Button;