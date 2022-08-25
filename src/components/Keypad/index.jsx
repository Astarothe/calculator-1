import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { btnValues } from '@/constants'
import { Button, Wrapper } from './styled'
import { controller } from '@/helpers'

const KeypadComponent = ({ inputValue, inputChange }) => {
  const dispatch = useDispatch()

  const handlerClick = btn => {
    if(Number(btn) || btn === 0 || btn === '.') {
      inputValue += btn
      inputChange(inputValue)
    } else {
      controller(btn, dispatch, inputValue)
      inputChange('')
    }
  }

  return (
    <Wrapper>
      {btnValues.flat().map((btn, i) => (
        <Button
          key={i}
          onClick={() => handlerClick(btn)}
          className={btn === '=' ? 'equal' : ''}
        >
          {btn}
        </Button>),
      )}
    </Wrapper>
  )
}

KeypadComponent.propTypes = {
  inputValue: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
}

Wrapper.propTypes = {
  children: PropTypes.array,
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

export default KeypadComponent
