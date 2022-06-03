// Your code here
const {expect} = require('chai'); // we are destrucuring the expect funtion ({ expect }) from the chai;
// desrcibe and it are mocha, expect is chai. mocha describes what to do, chai checks if its doing that;
const reverseString = require('../problems/reverse-string'); // this is our import

//each it corresponds to a check-mark on moch, and expects a truthy or falsey value to check if we pass/fail the spec.
// describe is like a parent function that prints to the console.
describe('reverseString', function() {
  it('returns the string reversed', function() {
    expect(reverseString('fun')).to.equal('nuf') // this returns truthy or falsey
  })

  it('throws an error if not given a string', function() {
    expect(reverseString).throws(TypeError);
  })
})
