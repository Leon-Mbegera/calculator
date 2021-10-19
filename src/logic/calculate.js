import Operate from './operate';

const Calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const sign = ['-', 'x', '÷', '+'];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '+/-') {
    total *= -1;
  } else if (buttonName === '%') {
    total *= 0.01;
  }

  if (buttonName === '.') {
    if (!total) {
      total = '0.';
    } else if (total && operation) {
      total += '.';
    } else if (total && next && operation) {
      next += '.';
    } else if (total && operation && !next) {
      next = '0.';
    }
  }

  if (digits.includes(buttonName)) {
    if (operation === null) {
      if (total === null) {
        total = buttonName;
      } else {
        total += buttonName;
      }
    } else {
      next = buttonName;
    }
  }

  if (sign.includes(buttonName)) {
    if (!total) {
      total = '0';
    } else if (total && !next) {
      operation = buttonName;
    } else if (total && next && operation) {
      total = Operate(total, next, operation);
      next = null;
      operation = buttonName;
    }
  }

  return { total, next, operation };
};

export default Calculate;
