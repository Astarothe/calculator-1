import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export const DisplayComponent = ({ inputValue, inputPlaceholder, inputChange }) => {
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleChange = ({ target }) => {
    if (/[-+/*]/.test(target.value)) {
      target.value = ''
    }
    if(target.value.includes('=')) {
      target.value = ''
    }
    inputChange(target.value)
  }

  return <input
    id="display"
    ref={inputRef}
    className="display"
    type="text"
    value={inputValue}
    placeholder={inputPlaceholder}
    onChange={handleChange}
  />
}

DisplayComponent.propTypes = {
  inputValue: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
}
