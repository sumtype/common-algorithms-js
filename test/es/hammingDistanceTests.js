'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { hammingDistance } from '../../es'

const expect = chai.expect

// Test
describe('Hamming Distance Algorithm: hammingDistance(s1, s2)', () => {
  it('Should return the correct Hamming distance between two strings of equal length', () => {
    expect(hammingDistance('test', 'rtst')).to.eql(2)
    expect(hammingDistance()).to.eql(0)
  })
  it('Should return null if the two strings are not of equal length', () => {
    expect(hammingDistance('test', 'rts')).to.eql(null)
    expect(hammingDistance('test')).to.eql(null)
  })
})
