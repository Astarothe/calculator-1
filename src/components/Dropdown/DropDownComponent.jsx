import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ArrowDown from '@/assets/ArrowDown.svg'
import ArrowUp from '@/assets/ArrowUp.svg'
import { values } from '@/constants'

import { ButtonHeader, Wrapper, Selecting, List, ListItem, Labeling } from './styled'

class Dropdown extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isListOpen: false,
      title: values[0].content,
      themes: values,
    }
  }

  componentDidMount() {
    this.setState(({ themes }) => ({
      themes: themes.filter(({ id }) => id !== 0),
    }))
  }

  handleToggleList = () => {
    this.setState(({ isListOpen }) => ({
      isListOpen: !isListOpen,
    }))
  }

  handleClick = ({ content, id, action }) => {
    this.props.dispatch(action())
    this.setState({
      isListOpen: false,
      title: content,
      themes: values.filter(({ id: _id }) => _id !== id),
    })
  }

  render() {
    const { isListOpen, title, themes } = this.state
    return (
      <Wrapper>
        <Labeling>Switch Theme</Labeling>
        <ButtonHeader
          onClick={this.handleToggleList}
        >
          <Selecting>{title}</Selecting>
          {isListOpen
            ? <img src={ArrowUp} alt="ArrowUp" />
            : <img src={ArrowDown} alt="ArrowDown" />}
        </ButtonHeader>
        {isListOpen && (
          <List role="list">
            {themes.map(item => (
              <ListItem
                key={item.id}
                onClick={() => this.handleClick(item)}
              >
                {item.content}
              </ListItem>
            ))}
          </List>
        )}
      </Wrapper>
    )
  }
}

Dropdown.propTypes = {
  dispatch: PropTypes.func,
}

Wrapper.propTypes = {
  children: PropTypes.array.isRequired,
}

Labeling.propTypes = {
  children: PropTypes.string,
}

ButtonHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
}

Selecting.propTypes = {
  children: PropTypes.string,
}

List.propTypes = {
  role: PropTypes.oneOf(['list']),
  children: PropTypes.array,
}

ListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
}

export default connect()(Dropdown)
