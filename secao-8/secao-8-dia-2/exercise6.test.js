const { notDeepEqual } = require('assert');
const someBookWasReleaseOnThe80s = require('./exercise6');

it('Returns true if a book was released in the 80s', () => {
  expect(typeof someBookWasReleaseOnThe80s).toBe('function');
  expect(someBookWasReleaseOnThe80s()).toBeTruthy();
  expect(someBookWasReleaseOnThe80s()).toBeDefined();
  expect(someBookWasReleaseOnThe80s()).not.toBe(false);
})