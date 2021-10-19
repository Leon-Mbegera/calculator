import FatTony from 'big.js';

const Operate = (numOne, numTwo, operation) => {
  let output;
  const numberOne = new FatTony(numOne);
  const numberTwo = new FatTony(numTwo);

  if (operation === '-') {
    output = numberOne - numberTwo;
  } else if (operation === '+') {
    output = numberOne + numberTwo;
  } else if (operation === 'x') {
    output = numberOne * numberTwo;
  } else if (operation === '÷') {
    output = numberOne / numberTwo;
  } else if (operation === '%') {
    if (numberOne) {
      output = numberOne * 0.01;
    } else if (numberTwo) {
      output = numberTwo * 0.01;
    }
  }
  return output.toString();
};

export default Operate;
