const myFizzBuzz = require('./fizzBuzz.js');

describe('if divisible by 3 and 5, return fizzBuzz', () => {
  test('if divided by "num", returns the expected string', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(2)).toBe(2);
    expect(myFizzBuzz('ola')).toBe(false);
  });
});