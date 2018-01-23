/* eslint-env mocha */
const path = require('path')
const mergeSort = require(path.join(__dirname, '..', 'algorithms', 'mergeSort.js'))
const expect = require('chai').expect
describe('Merge Sort Algorithm: mergeSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers.', () => {
    expect(mergeSort([8, 7, 6, 5, 4, 3, 2, 1]).toString()).to.eql([1, 2, 3, 4, 5, 6, 7, 8].toString())
    expect(mergeSort([5, 8, 6, 7, 4, 1, 2, 3]).toString()).to.eql([1, 2, 3, 4, 5, 6, 7, 8].toString())
    expect(mergeSort([1, 2, 3, 4, 5, 6, 7, 8]).toString()).to.eql([1, 2, 3, 4, 5, 6, 7, 8].toString())
  })
})
