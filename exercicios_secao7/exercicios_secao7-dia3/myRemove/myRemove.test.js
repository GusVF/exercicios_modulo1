const myRemove = require('./myRemove.js');

describe('removes item from array', () => {
  it('removes the correct item from the array', () => {
    const arr = [1, 2 ,3 ,4];
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove(arr, 5)).toEqual([1, 2, 3, 4]);
  });
});