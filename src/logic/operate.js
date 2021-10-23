import FatTony from 'big.js';

const Operate = (numOne, numTwo, operation) => {
  let output;
  const numberOne = new FatTony(numOne);
  const numberTwo = new FatTony(numTwo);

  if (operation === '-') {
    if (numberOne >= numberTwo) {
      output = numberOne.minus(numberTwo);
    } else {
      output = -numberTwo.minus(numberOne);
    }
  } else if (operation === '+') {
    output = numberOne.plus(numberTwo);
  } else if (operation === 'x') {
    output = numberOne.times(numberTwo);
  } else if (operation === '÷') {
    output = numberOne / numberTwo;
  } else if (operation === '%') {
    if (numberOne) {
      output = numberOne.div(0.01);
    } else if (numberTwo) {
      output = numberTwo.div(100);
    }
  }
  return output.toString();
};

export default Operate;
