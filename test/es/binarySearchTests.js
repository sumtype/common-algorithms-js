'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { binarySearch } from '../../es'

const expect = chai.expect

// Test
describe('Binary Search Algorithm: binarySearch(input, value)', () => {
  it('Should return the index of the specified value when given an input array of numbers ordered from low to high wherein the specified value is contained', () => {
    expect(binarySearch([1, 2, 4, 5, 7, 8], 2)).to.eql(1)
  })
  it('Should return null when the specified value does not exist in the input array of numbers ordered from low to high', () => {
    expect(binarySearch([1, 2, 4, 5, 7, 8], 10)).to.eql(null)
  })
  it('Should return null when the input array is empty', () => {
    expect(binarySearch([], 10)).to.eql(null)
  })
  it('Should return the index of a null value if there is one in the input array when the input value is unspecified', () => {
    expect(binarySearch([null])).to.eql(0)
  })
  it('Should return the index of a null value neither input values are specified', () => {
    expect(binarySearch()).to.eql(null)
  })
})
