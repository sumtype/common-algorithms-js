/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const radixSort = require(path.join(__dirname, '..', 'algorithms', 'radixSort.js'))

// Test
describe('Radix Sort Algorithm: radixSort(input, base)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers.', () => {
    expect(radixSort([10, 9, 8, 6, 3, -5, 0, 15, 168, 186, -26, 298, 2, -45, 4], 10).toString()).to.eql([-45, -26, -5, 0, 2, 3, 4, 6, 8, 9, 10, 15, 168, 186, 298].toString())
  })
})
