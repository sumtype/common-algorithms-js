'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { powerSet } from '../../es'

const expect = chai.expect

// Test
describe('Power Set Algorithm: powerSet(array)', () => {
  it('Should return the correct power set of the given array', () => {
    expect(powerSet([1, 2, 3]).toString()).to.eql([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]].toString())
    expect(powerSet([1, 'test', null, true]).toString()).to.eql([[], [1], ['test'], [1, 'test'], [null], [1, null], ['test', null], [1, 'test', null], [true], [1, true], ['test', true], [1, 'test', true], [null, true], [1, null, true], ['test', null, true], [1, 'test', null, true]].toString())
  })
  it('Should return null if no input array is provided', () => {
    expect(powerSet()).to.eql(null)
  })
})
