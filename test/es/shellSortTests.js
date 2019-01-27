'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { shellSort } from '../../es'

const expect = chai.expect

// Test
describe('Shell Sort Algorithm: shellSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers', () => {
    expect(shellSort([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186, 298].toString())
  })
  it('Should return null if the input array is not provided', () => {
    expect(shellSort()).to.eql(null)
  })
})
