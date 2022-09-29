import React, { Component } from 'react'
import { connect } from 'react-redux'

import { controller } from '@/helpers'

import { CalculatorComponent } from './styled'
import { DisplayComponentCC } from '../Display/Display'
import KeypadComponentCC from '../Keypad/Keypad'
import { ControlPanelCC } from '../ControlPanel/ControlPanel'


class CalculatorCC extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true,
      valueFromDisplay: this.props.num,
    }
  }

  handleChange = val => {
    const pattern = /^-|[a-zа-яё]|[!@#$^&?|\\,<>{}"'`~:;[\]_()%]|[.]{2}/gi
    this.setState({ valueFromDisplay: val.replace(pattern, '') })
  }

  handleClick = () => {
    this.setState(state => ({ isVisible: !state.isVisible }))
  }

  handleKeyDown = ({ key }) => {
    switch (key) {
      case 'c':
        key = 'C'
        this.setState({ valueFromDisplay: '' })
        break
      case 'C':
        key = 'CE'
        this.setState({ valueFromDisplay: '' })
        break
      case '_':
        key = '±'
        this.setState({ valueFromDisplay: '' })
        break
      case 'Enter':
        key = '='
        this.setState({ valueFromDisplay: '' })
        break
      default:
    }
    controller(key, this.props.dispatch, this.state.valueFromDisplay)
  }

  render() {
    return (
      <CalculatorComponent
        onkeyDown={this.handleKeyDown}
        isVisible={this.state.isVisible}
      >
        <DisplayComponentCC
          inputValue={this.state.valueFromDisplay}
          inputPlaceholder={this.props.result}
          inputChange={this.handleChange}
        />
        <KeypadComponentCC
          inputValue={this.state.valueFromDisplay}
          inputChange={this.handleChange}
          isVisible={this.state.isVisible}
          toggleVisible={this.handleClick}
        />
        <ControlPanelCC isVisible={this.state.isVisible} />
      </CalculatorComponent>
    )
  }
}

function mapStateToProps({ calculate }) {
  const { num, result } = calculate
  return { num, result }
}

export default connect(mapStateToProps)(CalculatorCC)
