class Calculator {
  constructor() {
    this.value = 0
    this.history = []
  }

  executeCommand (command) {
    this.value = command.execute(this.value).toFixed(3)
    this.history.push(command)
  }

  undo () {
    const command = this.history.pop()
    this.value = command.undo(this.value)
  }
}

export class AddCommand {
  constructor (valueToAdd) {
    this.valueToAdd = valueToAdd
  }

  execute (currentValue) {
    return currentValue + this.valueToAdd
  }

  undo (currentValue) {
    return currentValue - this.valueToAdd
  }
}

export class SubtractCommand {
  constructor (valueToSubtract) {
    this.valueToSubtract = valueToSubtract
  }

  execute (currentValue) {
    return currentValue - this.valueToSubtract
  }

  undo (currentValue) {
    return currentValue + this.valueToSubtract
  }
}

export class MultiplyCommand {
  constructor (valueToMultiply) {
    this.valueToMultiply = valueToMultiply
  }

  execute (currentValue) {
    return currentValue * this.valueToMultiply
  }

  undo (currentValue) {
    return currentValue / this.valueToMultiply
  }
}

export class DivideCommand {
  constructor(valueToDivide) {
    if (valueToDivide === 0) {
      throw new Error('Divide by zero is forbidden')
    }
    this.valueToDivide = valueToDivide
  }

  execute (currentValue) {
    return currentValue / this.valueToDivide
  }

  undo (currentValue) {
    return currentValue * this.valueToDivide
  }
}

export class SignChangeCommand {
  constructor(valueToSignChange) {
    this.valueToSignChange = valueToSignChange
  }

  execute () {
    return this.valueToSignChange * -1
  }

  undo () {
    return this.valueToSignChange * -1
  }
}

export class RemainderOfTheDivisionCommand {
  constructor (valueToDivide) {
    this.valueToDivide = valueToDivide
  }

  execute(currentValue) {
    return currentValue % this.valueToDivide
  }
}

export const calculator = new Calculator()
