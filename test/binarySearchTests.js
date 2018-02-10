/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const binarySearch = require(path.join(__dirname, '..', 'algorithms', 'binarySearch.js'))

// Test
describe('Binary Search Algorithm: binarySearch(input, value)', () => {
  it('Should return the index of the specified value when given an input array of numbers ordered from low to high wherein the specified value is contained.', () => {
    expect(binarySearch([1, 2, 4, 5, 7, 8], 2).toString()).to.eql((1).toString())
  })
  it('Should return -1 when the specified value does not exist in the input array of numbers ordered from low to high.', () => {
    expect(binarySearch([1, 2, 4, 5, 7, 8], 10).toString()).to.eql((-1).toString())
  })
})
