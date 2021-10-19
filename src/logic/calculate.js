import Operate from './operate'

const Calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const sign = ['-', 'x', '÷', '+']

  if (buttonName === 'AC') {
    total = null
    next = null
    operation = null
  } else if (buttonName === '+/-') {
    total *= -1
  } else if (buttonName === '%') {
    total *= 0.01
  }

}