'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { countingSort } from '../../es'

const expect = chai.expect

// Test
describe('Counting Sort Algorithm: countingSort(array)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers', () => {
    expect(countingSort([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186, 298].toString())
    expect(countingSort([8, 7, 6, 5, 4, 3, 2, 1]).toString()).to.eql([1, 2, 3, 4, 5, 6, 7, 8].toString())
    expect(countingSort([5, 8, 6, 7, 4, 1, 2, 3]).toString()).to.eql([1, 2, 3, 4, 5, 6, 7, 8].toString())
    expect(countingSort([1, 2, 3, 4, 5, 6, 7, 8]).toString()).to.eql([1, 2, 3, 4, 5, 6, 7, 8].toString())
  })
  it('Should return an empty array when no input array is provided', () => {
    expect(countingSort().toString()).to.eql([].toString())
  })
})
