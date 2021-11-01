import Operate from '../../logic/operate';

describe('operate.js', () => {
  it('result of an operation is a string', () => {
    const result = Operate('4', '5', '+');
    expect(typeof result).toEqual('string');
  });

  it('should be a function', () => {
    expect(typeof Operate).toEqual('function');
  });

  it('should subtract two num 2 from num 1', () => {
    const result = Operate('9', '7', '-');
    expect(result * 1).toEqual(-2);
  });

  it('should add two numbers together', () => {
    const result = Operate('7', '9', '+');
    expect(result * 1).toBe(16);
  });

  it('should multiply num 1 by num 2', () => {
    const result = Operate('2', '4', 'x');
    expect(result * 1).toEqual(8);
  });

  it('should divide num 1 by num 2', () => {
    const result = Operate('7', '7', '÷');
    expect(result * 1).toEqual(1);
  });
});
