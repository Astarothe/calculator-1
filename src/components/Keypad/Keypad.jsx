import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { btnValues } from '@/constants'
import { Button, Wrapper } from './styled'
import { controller } from '@/helpers'

class KeypadComponentCC extends PureComponent {
  handleClick = (btn, { target }) => {
    let {inputValue} = this.props
    if (Number(btn) || btn === 0 || btn === '.') {
      inputValue += btn
      this.props.inputChange(inputValue)
    } else {
      if (btn === 'C' && inputValue === '') {
        controller('CE', this.props.dispatch, inputValue)
      }
      if (btn === '>') {
        this.props.toggleVisible(target)
      }
      controller(btn, this.props.dispatch, inputValue)
      this.props.inputChange('')
    }
  }

  changeDirection = btn => {
    if (btn === '>' && !this.props.isVisible) {
      return '<'
    }

    return btn
  }

  render() {
    return (
      <Wrapper isVisible={this.props.isVisible}>
        {btnValues.flat().map((btn, i) => (
          <Button
            key={i}
            onClick={e => this.handleClick(btn, e)}
            className={btn === '=' ? 'equal' : ''}
          >
            {this.changeDirection(btn)}
          </Button>
        ))}
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch,
})

export default connect(null, mapDispatchToProps)(KeypadComponentCC)
