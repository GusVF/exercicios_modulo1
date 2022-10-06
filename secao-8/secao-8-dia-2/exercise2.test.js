const smallerName = require('./exercise2');

it('it returns Duna ', () =>{
  expect(smallerName()).toEqual('Duna');
  expect(smallerName()).not.toBeUndefined();
})

