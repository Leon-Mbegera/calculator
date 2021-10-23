import Operate from './operate';

const Calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const sign = ['-', 'x', '÷', '+'];

  if (buttonName === 'AC') {
    total = '';
    next = '';
    operation = '';
  } else if (digits.includes(buttonName) && operation === '') {
    total += buttonName;
  } else if (digits.includes(buttonName) && operation !== '') {
    total += buttonName;
  } else if (sign.includes(buttonName)) {
    operation = buttonName;
    next = total;
    total = '';
  } else if (buttonName === '=') {
    total = Operate(total, next, operation);
    next = '';
    operation = '';
  } else if (buttonName === '+/-') {
    total = -total;
    total = total.toString();
  } else if (buttonName === '%') {
    total /= 100;
    total = total.toString();
  }

  if (buttonName === '.') {
    if (total === '' && operation === '') {
      total = '0.';
    } else if (total !== '' && operation === '') {
      total += buttonName;
    } else if (total !== '' && operation !== '') {
      total += buttonName;
    }
  }
  return { total, next, operation };
};

export default Calculate;
