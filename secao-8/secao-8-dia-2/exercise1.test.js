const authorBornIn1947 = require('./exercise1');

describe('Return author born in 1947', () => {
  it('Return author born in 1947', () => {
    expect(authorBornIn1947()).toEqual('Stephen King');
    expect(authorBornIn1947()).toBeDefined();
  })
})