/* eslint-env mocha */
const path = require('path')
const quickSort = require(path.join(__dirname, '..', 'algorithms', 'quickSort.js'))
const expect = require('chai').expect
describe('Quick Sort Algorithm: quickSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers.', () => {
    expect(quickSort([5, 4, 14, 3, 2, 1]).toString()).to.eql([1, 2, 3, 4, 5, 14].toString())
  })
})
