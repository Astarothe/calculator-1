import {
  ADD,
  CLEAR,
  CLEAR_EXPRESSION,
  DIVIDE,
  EQUAL,
  MULTIPLY,
  SUBTRACT,
  SIGN_CHANGE,
  REMAINDER_OF_THE_DIVISION,
  CLEAR_ALL,
  USE_LIGHT_THEME,
  USE_DARK_THEME,
  USE_COLORFUL_THEME,
} from '@/constants'

export const addition = num => ({
  type: ADD,
  payload: num,
})

export const subtractions = num => ({
  type: SUBTRACT,
  payload: num,
})

export const division = num => ({
  type: DIVIDE,
  payload: num,
})

export const multiplications = num => ({
  type: MULTIPLY,
  payload: num,
})

export const signChange = num => ({
  type: SIGN_CHANGE,
  payload: num,
})

export const remainderOfTheDivision = num => ({
  type: REMAINDER_OF_THE_DIVISION,
  payload: num,
})

export const clearDisplay = () => ({
  type: CLEAR,
})

export const clearExpression = () => ({
  type: CLEAR_EXPRESSION,
})

export const equal = num => ({
  type: EQUAL,
  payload: num,
})

export const clearAll = () => ({
  type: CLEAR_ALL,
})

export const getLightTheme = () => ({
  type: USE_LIGHT_THEME,
})

export const getDarkTheme = () => ({
  type: USE_DARK_THEME,
})

export const getColorfulTheme = () => ({
  type: USE_COLORFUL_THEME,
})
