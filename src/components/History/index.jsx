import React from 'react'
import { useSelector } from 'react-redux'

export const HistoryComponent = () => {
  const expressions = useSelector(state => state.calculate.expressions) || []
  return (
    <div id="history" className="history">
      <h2 className="title">History</h2>
      <ul className="expressions">
        {expressions.map((expression, i) => <li key={i} className="expression">{expression}</li>)}
      </ul>
    </div>
  )
}
