import React from 'react'
import HistoryComponentCC from '../History/History'

export const ControlPanel = ({ isVisible }) => (
  <div className={isVisible ? "history" : "none"}>
    {isVisible && <HistoryComponentCC />}
  </div>
)
