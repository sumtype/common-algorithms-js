'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { bubbleSort } from '../../es'

const expect = chai.expect

// Test
describe('Bubble Sort Algorithm: bubbleSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers', () => {
    expect(bubbleSort([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186, 298].toString())
  })
  it('Should return null when there is no input array', () => {
    expect(bubbleSort()).to.eql(null)
  })
})
