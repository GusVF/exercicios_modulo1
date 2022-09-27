const findDivisibleBy3And5 = require('./find1');

it('Returns the numbers divisible by 3 and 5', () => {
  expect(typeof findDivisibleBy3And5).toBe('function');
  expect(findDivisibleBy3And5()).toBeDefined();
  expect(findDivisibleBy3And5()).toEqual(30);
  expect(findDivisibleBy3And5()).not.toEqual(21);
  expect(findDivisibleBy3And5()).not.toEqual(3);
  expect(findDivisibleBy3And5()).not.toEqual(15);
  expect(findDivisibleBy3And5()).not.toEqual(45);
})