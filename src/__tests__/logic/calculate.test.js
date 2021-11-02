import Calculate from '../../logic/calculate';

const obj1 = { total: null, next: null, operation: null };
const obj2 = { total: '7', next: null, operation: null };

describe('Calculate.js', () => {
  it('should return a number value', () => {
    const res = Calculate(7, obj2);
    const val = res.total * 1;
    expect(typeof val).toEqual('number');
  });

  it('Should return an object', () => {
    const res = Calculate(7, obj1);
    expect(typeof res).toEqual('object');
  });

  it('Should return object with null for each value', () => {
    const res = Calculate('AC', obj1);
    expect(res).toEqual({ next: undefined, operation: undefined, total: undefined });
  });

  it('Should return a float value', () => {
    const res = Calculate('.', obj1);
    expect(res).toEqual({ next: undefined, operation: undefined, total: undefined });
  });

  it('should return a percent value', () => {
    const res = Calculate(obj2, '%');
    expect(res).toStrictEqual({ next: null, operation: null, total: '0.07' });
  });

  it('should return a negative value', () => {
    const res = Calculate({ total: '7', next: '10', operation: '-' }, '=');
    expect(res.total * 1).toEqual(3);
    expect(res.next).toEqual('');
    expect(res.operation).toEqual('');
  });

  it('should return -ve value', () => {
    const res = Calculate(obj2, '+/-');
    expect(res.total).toBe('-7');
  });

  it('should return a result of multiplication', () => {
    const res = Calculate({ total: '7', next: '10', operation: 'x' }, '=');
    expect(res.total * 1).toEqual(70);
    expect(res.next).toEqual('');
    expect(res.operation).toEqual('');
  });

  it('should return a result of the addition', () => {
    const res = Calculate({ total: '7', next: '10', operation: '+' }, '=');
    expect(res.total * 1).toEqual(17);
    expect(res.next).toEqual('');
    expect(res.operation).toEqual('');
  });

  it('Adding positive number is not zero', () => {
    const result = Calculate('=', { total: '2', next: '2', operation: '+' });
    expect(result.total * 1).not.toBe(0);
    expect(result.next).not.toBe(0);
    expect(result.operation).not.toBe('+');
  });
});
