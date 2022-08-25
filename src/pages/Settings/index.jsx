import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { PageLayout } from '@/layouts/styled'
import Dropdown from '@/components/Dropdown/DropDownComponent'
import { ClearButton, Heading } from './styled'
import { clearAll } from '@/store/actions'

class SettingsPage extends PureComponent {
  handleClick = () => {
    this.props.dispatch(clearAll())
  }

  render() {
    return (
      <PageLayout>
        <Heading id="title">Settings</Heading>
        <Dropdown />
        <ClearButton onClick={this.handleClick}>
          Clear All History
        </ClearButton>
      </PageLayout>
    )}
}

SettingsPage.propTypes = {
  dispatch: PropTypes.func,
}

Heading.propTypes = {
  id: PropTypes.string,
}

ClearButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default connect()(SettingsPage)
