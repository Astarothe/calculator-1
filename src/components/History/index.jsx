import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

export const HistoryComponent = () => {
  const expressions = useSelector(state => state.calculate.expressions) || []
  return (
    <Fragment>
      <h2 className="title">History</h2>
      <ul className="expressions">
        {expressions.map((expression, i) => <li key={i} className="expression">{expression}</li>)}
      </ul>
    </Fragment>
  )
}
