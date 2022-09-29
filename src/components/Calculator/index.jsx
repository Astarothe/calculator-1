import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import KeypadComponent from '../Keypad'
import { CalculatorComponent } from './styled'
import { DisplayComponent } from '../Display'
import { ControlPanel } from '../ControlPanel'

import { controller } from '@/helpers'

const Calculator = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.calculate)
  const [isVisible, setIsVisible] = useState(true)
  const { num, result } = state
  const [valueFromDisplay, setValueFromDisplay] = useState(num)

  const handlerChange = val => {
    const pattern = /^-|[a-zа-яё]|[!@#$^&?|\\,<>{}"'`~:;[\]_()%]|[.]{2}/gi
    setValueFromDisplay(val.replace(pattern, ''))
  }

  const handleClick = () => {
    setIsVisible(bool => !bool)
  }

  const handleKeyDown = ({ key }) => {
    switch (key) {
      case 'c':
        key = 'C'
        setValueFromDisplay('')
        break
      case 'C':
        key = 'CE'
        setValueFromDisplay('')
        break
      case '_':
        key = '±'
        setValueFromDisplay('')
        break
      case 'Enter':
        key = '='
        setValueFromDisplay('')
        break
      default:
    }
    controller(key, dispatch, valueFromDisplay)
  }

  return (
    <CalculatorComponent
      onKeyDown={handleKeyDown}
      isVisible={isVisible}
    >
      <DisplayComponent
        inputValue={valueFromDisplay}
        inputPlaceholder={result}
        inputChange={handlerChange}
      />
      <KeypadComponent
        inputValue={valueFromDisplay}
        inputChange={handlerChange}
        isVisible={isVisible}
        toggleVisible={handleClick}
      />
      <ControlPanel isVisible={isVisible} />
    </CalculatorComponent>
  )
}

CalculatorComponent.propTypes = {
  onKeyDown: PropTypes.func,
  children: PropTypes.array,
}

DisplayComponent.propTypes = {
  inputValue: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
}

KeypadComponent.propTypes = {
  inputValue: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
}

export default Calculator
