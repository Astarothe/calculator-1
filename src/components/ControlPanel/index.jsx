import React from 'react'
import { HistoryComponent } from '../History'

export const ControlPanel = ({ isVisible }) => (
  <div className={isVisible ? "history" : "none"}>
    {isVisible && <HistoryComponent />}
  </div>
)
