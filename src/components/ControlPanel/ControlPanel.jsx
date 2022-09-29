import React, { PureComponent } from 'react'

import HistoryComponentCC from '../History/History'

export class ControlPanelCC extends PureComponent {
  render () {
    return (
      <div className={this.props.isVisible ? 'history' : 'none'}>
        {this.props.isVisible && <HistoryComponentCC />}
      </div>
    )
  }
}
