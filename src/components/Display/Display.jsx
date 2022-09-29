import React, { createRef, PureComponent } from 'react'

export class DisplayComponentCC extends PureComponent {
  constructor(props) {
    super(props)
    this.inputRef = createRef()
  }

  componentDidMount() {
    this.inputRef.current.focus()
  }

  handleChange = ({ target }) => {
    if (/[-+/*]/.test(target.value)) {
      target.value = ''
    }
    if (target.value.includes('=')) {
      target.value = ''
    }
    this.props.inputChange(target.value)
  }

  render () {
    return <input
      id="display"
      ref={this.inputRef}
      className="display"
      type="text"
      value={this.props.inputValue}
      placeholder={this.props.inputPlaceholder}
      onChange={this.handleChange}
    />
  }
}
