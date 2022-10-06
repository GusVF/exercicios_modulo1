const getNamedBook = require('./exercise3');

it('returns a book with name length of 26 charc.', () => {
  expect(getNamedBook()).toBeDefined();
  expect(getNamedBook()).toEqual('As Crônicas de Gelo e Fogo');
  expect(typeof getNamedBook).toBe('function');
})
