import Operate from './operate';

const Calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const sign = ['-', 'x', '÷', '+'];

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '+/-') {
    total = `${(total *= 1)}`;
    next *= 1;
  }

  if (buttonName === '%') {
    total = (total *= 0.01).toString();
  }

  if (buttonName === '=') {
    total = Operate(total, next, operation);
    next = null;
    operation = null;
  }

  if (buttonName === '.') {
    if (!total) {
      total = '0.';
    }

    if (total && !next) {
      if (operation) {
        next += '0.';
      } else if (total.indexOf('.') === -1) {
        total += '.';
      }
    }

    if (total && next && operation) {
      if (next.indexOf('.') === -1) {
        next += '.';
      }
    }
  }

  if (digits.includes(buttonName)) {
    if (operation) {
      if (total === null) {
        total = buttonName;
      } else if (typeof total === 'number') {
        total = buttonName;
      } else {
        total += buttonName;
      }
    } else if (next === null) {
      next = buttonName;
    } else {
      next += buttonName;
    }
  }

  if (sign.includes(buttonName)) {
    if (!total) {
      total = '0';
    }

    if (total && !next) {
      operation = buttonName;
    }

    if (total && next && operation) {
      total = Operate(total, next, operation);
      next = null;
      operation = buttonName;
    }
  }
  return { total, next, operation };
};

export default Calculate;
