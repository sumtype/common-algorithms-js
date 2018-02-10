/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const bucketSort = require(path.join(__dirname, '..', 'algorithms', 'bucketSort.js'))

// Test
describe('Bucket Sort Algorithm: bucketSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers.', () => {
    expect(bucketSort([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26], 5).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186, 298].toString())
  })
})
