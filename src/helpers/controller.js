import { addition, clearExpression, clearDisplay, division, equal, multiplications, subtractions, signChange, remainderOfTheDivision, closeBrackets, openBrackets } from '@/store/actions'

export const controller = (checked, dispatch, value) => {
  switch(checked) {
    case '+':
      dispatch(addition(value))
      break
    case '-':
      dispatch(subtractions(value))
      break
    case '*':
      dispatch(multiplications(value))
      break
    case '/':
      dispatch(division(value))
      break
    case '±':
      dispatch(signChange(value))
      break
    case '%':
      dispatch(remainderOfTheDivision(value))
      break
    case '=':
      dispatch(equal(value))
      break
    case 'C':
      dispatch(clearDisplay())
      break
    case 'CE':
      dispatch(clearExpression())
      break
    case '(':
      dispatch(openBrackets(value))
      break
    case ')':
      dispatch(closeBrackets(value))
      break
    default:
  }
}
