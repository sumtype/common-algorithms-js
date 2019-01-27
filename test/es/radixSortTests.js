'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { radixSort } from '../../es'

const expect = chai.expect

// Test
describe('Radix Sort Algorithm: radixSort(array, base)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers', () => {
    expect(radixSort([10, 9, 8, 6, 3, -5, 0, 15, 168, 186, -26, 298, 2, -45, 4], 10).toString()).to.eql([-45, -26, -5, 0, 2, 3, 4, 6, 8, 9, 10, 15, 168, 186, 298].toString())
  })
  it('Should use base 10 by default if no base input is specified', () => {
    expect(radixSort([10, 9, 8, 6, 3, -5, 0, 15, 168, 186, -26, 298, 2, -45, 4]).toString()).to.eql([-45, -26, -5, 0, 2, 3, 4, 6, 8, 9, 10, 15, 168, 186, 298].toString())
  })
  it('Should return null if no input array is specified', () => {
    expect(radixSort()).to.eql(null)
  })
})
