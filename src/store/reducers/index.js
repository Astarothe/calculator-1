import { combineReducers } from 'redux'

import calculate from './calculate'
import theme from './theme'

export const rootReducer = combineReducers({
  calculate,
  theme,
})
