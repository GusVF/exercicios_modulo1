const bornInThe1900s = require('./exercise5');

it('return true if everyone was born in the 1900s', () => {
  expect(typeof bornInThe1900s).toBe('function');
  expect(bornInThe1900s()).toBeFalsy();
  expect(bornInThe1900s()).not.toBe(true);
  expect(bornInThe1900s()).toBeDefined();
})
