'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { quickSort } from '../../es6'

const expect = chai.expect

// Test
describe('Quick Sort Algorithm: quickSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers.', () => {
    expect(quickSort([5, 4, 14, 3, 2, 1]).toString()).to.eql([1, 2, 3, 4, 5, 14].toString())
  })
})
