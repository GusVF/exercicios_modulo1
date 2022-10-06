const authorUnique = require('./exercise7');

it('returns true if noOne was born in the same year.', () => {
  expect(typeof authorUnique).toBe('function');
  expect(authorUnique()).toEqual(false);
  expect(authorUnique()).not.toBeTruthy();
  expect(authorUnique()).toBeDefined();
})

