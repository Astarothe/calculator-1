import { AddCommand, calculator, DivideCommand, MultiplyCommand, RemainderOfTheDivisionCommand, SignChangeCommand, SubtractCommand } from '@/helpers'
import { ADD, CLEAR, CLEAR_EXPRESSION, DIVIDE, EQUAL, MULTIPLY, SUBTRACT, SIGN_CHANGE, REMAINDER_OF_THE_DIVISION, CLEAR_ALL } from '@/constants'

const DEFAULT_STATE = {
  num: '',
  result: calculator.value,
  history: calculator.history,
  expressions: [],
}

let operands = []
let expression = ''
let expressions = []

const createExpression = (operand, num) => {
  expression += `${calculator.value} ${operand} ${num}`
}

const checkOperands = (operand, num) => {
  switch (operand) {
    case '+':
      createExpression('+', num)
      calculator.executeCommand(new AddCommand(num))
      break
    case '-':
      createExpression('-', num)
      calculator.executeCommand(new SubtractCommand(num))
      break
    case '*':
      createExpression('*', num)
      calculator.executeCommand(new MultiplyCommand(num))
      break
    case '/':
      createExpression('/', num)
      calculator.executeCommand(new DivideCommand(num))
      break
    case '%':
      createExpression('%', num)
      calculator.executeCommand(new RemainderOfTheDivisionCommand(num))
      break
    default:

  }
}

const isOperandsEmpty = payload => {
  operands.length === 0 ? calculator.value = payload : checkOperands(operands.pop(), payload)
}

const calculate = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case ADD:
      isOperandsEmpty(+payload)
      operands.push('+')
      return {
        ...state,
        result: calculator.value,
      }
    case SUBTRACT:
      isOperandsEmpty(+payload)
      operands.push('-')
      return {
        ...state,
        result: calculator.value,
      }
    case MULTIPLY:
      isOperandsEmpty(+payload)
      operands.push('*')
      return {
        ...state,
        result: calculator.value,
      }
    case DIVIDE:
      isOperandsEmpty(+payload)
      operands.push('/')
      return {
        ...state,
        result: calculator.value,
      }
    case SIGN_CHANGE:
      calculator.executeCommand(new SignChangeCommand(+payload))
      return {
        ...state,
        result: calculator.value,
      }
    case REMAINDER_OF_THE_DIVISION:
      isOperandsEmpty(+payload)
      operands.push('%')
      return {
        ...state,
        result: calculator.value,
      }
    case EQUAL:
      isOperandsEmpty(+payload)
      operands.pop()
      expressions.push(expression)
      expression = ''
      return {
        ...state,
        result: +calculator.value,
        expressions,
      }
    case CLEAR:
      return {
        ...state,
        num: '',
      }
    case CLEAR_ALL:
      calculator.history = []
      expressions = []
      return {
        ...state,
        num: '',
        result: 0,
        history: calculator.history,
        expressions,
      }
    case CLEAR_EXPRESSION:
      operands = []
      return {
        ...state,
        num: '',
        result: 0,
      }
    default:
      return state
  }
}

export default calculate
