'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { mergeSort } from '../../es'

const expect = chai.expect

// Test
describe('Merge Sort Algorithm: mergeSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers', () => {
    expect(mergeSort([8, 7, 6, 5, 4, 3, 2, 1]).toString()).to.eql([1, 2, 3, 4, 5, 6, 7, 8].toString())
    expect(mergeSort([5, 8, 6, 7, 4, 1, 2, 3]).toString()).to.eql([1, 2, 3, 4, 5, 6, 7, 8].toString())
    expect(mergeSort([1, 2, 3, 4, 5, 6, 7, 8]).toString()).to.eql([1, 2, 3, 4, 5, 6, 7, 8].toString())
  })
  it('Should return null if no input array is provided', () => {
    expect(mergeSort()).to.eql(null)
  })
})
