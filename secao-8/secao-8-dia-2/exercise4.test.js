const booksOrderedByReleaseYearDesc = require('./exercise4');

it('Returns object with book by release order.', () => {
  expect(booksOrderedByReleaseYearDesc).toBeDefined();
  expect(typeof booksOrderedByReleaseYearDesc).toBe('function');
})