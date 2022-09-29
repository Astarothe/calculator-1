import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux'

class HistoryComponentCC extends PureComponent {
  render () {
    return (
      <Fragment>
        <h2 className="title">History</h2>
        <ul className="expressions">
          {this.props?.expressions.map((expression, i) => <li key={i} className="expression">{expression}</li>)}
        </ul>
      </Fragment>
    )
  }
}

function mapStateToProps({ calculate }) {
  return calculate
}

export default connect(mapStateToProps)(HistoryComponentCC)
