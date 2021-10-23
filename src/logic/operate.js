import FatTony from 'big.js';

const Operate = (numOne, numTwo, operation) => {
  let output;
  const numberOne = new FatTony(numOne);
  const numberTwo = new FatTony(numTwo);

  if (operation === '-') {
    output = numberTwo.minus(numberOne);
  } else if (operation === '+') {
    output = numberOne.plus(numberTwo);
  } else if (operation === 'x') {
    output = numberOne.times(numberTwo);
  } else if (operation === '÷') {
    if (numberOne > 0) {
      output = numberTwo.div(numberOne);
    } else {
      output = "can't divide by zero";
    }
  } else if (operation === '%') {
    if (numberOne) {
      output = numberOne.div(100);
    } else if (numberTwo) {
      output = numberTwo.div(100);
    }
  }
  return output.toString();
};

export default Operate;
