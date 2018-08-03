var flatten = require('./index');
var expect = require('chai').expect;

describe('Flatten Test', function() {
  var arr = [1,2,[3,4,[5,6]], 7,8]
  
  it('Flatten a nested array strcuture', function() {
    expect(flatten(arr)).to.deep.equal([1,2,3,4,5,6,7,8]);
  })
})
