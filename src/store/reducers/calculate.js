import {
  AddCommand,
  calculator,
  DivideCommand,
  MultiplyCommand,
  RemainderOfTheDivisionCommand,
  SignChangeCommand,
  SubtractCommand,
} from '@/helpers'
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
  CLEAR_ALL, OPEN_BRACKETS,
  CLOSE_BRACKETS,
} from '@/constants'

let numbers = []
let operands = []
let expression = []
let expressions = []

const priority = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  '%': 3,
}

const getThreeSymbols = num =>
  `${num}`.includes('.') ? Number(num.toFixed(3)) : num

const calc = () => {
  const operand = operands.pop()
  const number = numbers.pop()
  calculator.value = numbers.pop()
  switch(operand) {
    case '+':
      calculator.executeCommand(new AddCommand(number))
      break
    case '-':
      calculator.executeCommand(new SubtractCommand(number))
      break
    case '*':
      calculator.executeCommand(new MultiplyCommand(number))
      break
    case '/':
      calculator.executeCommand(new DivideCommand(number))
      break
    case '%':
      calculator.executeCommand(new RemainderOfTheDivisionCommand(number))
      break
    default:
  }
  numbers.push(getThreeSymbols(calculator.value))
}

const checkPriority = (operand) => {
  if (priority[operand] <= priority[operands.at(-1)]) {
    calc()
    checkPriority(operand)
  } else if (operand === ')') {
    while (operands.at(-1) !== '(') {
      calc()
    }
    if (operands.at(-1) === '(') {
      operands.pop()
    }
  } else {
    operands.push(operand)
  }
}

const DEFAULT_STATE = {
  num: '',
  result: calculator.value,
  history: calculator.history,
  expressions: [],
}

const calculate = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case ADD:
      if (payload !== '') numbers.push(Number(payload))
      expression.push(`${payload} +`)
      checkPriority('+')

      return {
        ...state,
        result: numbers.at(-1),
      }
    case SUBTRACT:
      if (payload !== '') numbers.push(Number(payload))
      expression.push(`${payload} -`)
      checkPriority('-')

      return {
        ...state,
        result: numbers.at(-1),
      }
    case MULTIPLY:
      if (payload !== '') numbers.push(Number(payload))
      expression.push(`${payload} *`)
      checkPriority('*')

      return {
        ...state,
        result: numbers.at(-1),
      }
    case DIVIDE:
      if (payload !== '') numbers.push(Number(payload))
      expression.push(`${payload} /`)
      checkPriority('/')

      return {
        ...state,
        result: numbers.at(-1),
      }
    case OPEN_BRACKETS:
      operands.push('(')
      expression.push('(')

      return {
        ...state,
        result: Number.isNaN(numbers.at(-1)) ? numbers.at(-1) : '',
      }
    case CLOSE_BRACKETS:
      if (payload !== '') numbers.push(Number(payload))
      expression.push(`${payload} )`)
      checkPriority(')')

      return {
        ...state,
        result: numbers.at(-1),
      }
    case SIGN_CHANGE:
      calculator.executeCommand(new SignChangeCommand(Number(payload)))
      return {
        ...state,
        result: calculator.value,
      }
    case REMAINDER_OF_THE_DIVISION:
      numbers.push(Number(payload))
      expression.push(`${payload} %`)
      checkPriority('%')
      return {
        ...state,
        result: numbers.at(-1),
      }
    case EQUAL:
      if (payload !== '') numbers.push(Number(payload))
      expression.push(payload)

      while (operands.length > 0) {
        calc()
      }
      expressions.push(expression.join(' '))
      expression = []

      return {
        ...state,
        result: numbers.pop(),
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
      numbers = []
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
