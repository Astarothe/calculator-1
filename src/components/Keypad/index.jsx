import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { btnValues } from '@/constants'
import { Button, Wrapper } from './styled'
import { controller } from '@/helpers'

const KeypadComponent = ({ inputValue, inputChange, isVisible, toggleVisible }) => {
  const dispatch = useDispatch()

  const handlerClick = (btn, { target }) => {
    if(Number(btn) || btn === 0 || btn === '.') {
      inputValue += btn
      inputChange(inputValue)
    } else {
      if(btn === 'C' && inputValue === '') {
        controller('CE', dispatch, inputValue)
      }
      if(btn === '>') {
        toggleVisible(target)
      }
      controller(btn, dispatch, inputValue)
      inputChange('')
    }
  }

  const changeDirection = btn => {
    if (btn === '>' && !isVisible) {
      return '<'
    }

    return btn
  }

  return (
    <Wrapper isVisible={isVisible}>
      {btnValues.flat().map((btn, i) => (
        <Button
          key={i}
          onClick={e => handlerClick(btn, e)}
          className={btn === '=' ? 'equal' : ''}
        >
          {changeDirection(btn)}
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
