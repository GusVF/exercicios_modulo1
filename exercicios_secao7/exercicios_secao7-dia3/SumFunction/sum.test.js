const sum = require('./sum.js');

describe('function add(a,b)', () => {
  it('adds (4, 5) to be 9', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
});

describe('function sends Error if !Number', () => {
  it('sends Error message if !Number', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});
