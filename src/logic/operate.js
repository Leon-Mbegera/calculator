import FatTony from 'big.js'

const Operate = (numberOne, numberTwo, operation) => {
  let output;
  let numberOne = new FatTony(numberOne)
  let numberTwo = new FatTony(numberTwo)

  if (operation === '-') {
    output = numberOne - numberTwo
  } else if (operation === '+') {
    output = numberOne + numberTwo
  } else if (operation === 'x') {
    output = numberOne * numberTwo
  } else if (operation === '÷') {
    output = numberOne / numberTwo
  } else if (operation === '%') {
    if (numberOne) {
      output = numberOne * 0.01
    } else if (numberTwo) {
      output = numberTwo * 0.01
    }
  }
  return output;
}

export default Operate;