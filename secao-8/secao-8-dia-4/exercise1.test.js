const flatten = require('./exercise1');

it('concatenates arrays into one', () => {
  expect(typeof flatten).toBe('function');
  expect(flatten()).not.toBeUndefined();
  expect(flatten()).toEqual(['1', '2', '3', true, 4, 5, 6]);
})
  