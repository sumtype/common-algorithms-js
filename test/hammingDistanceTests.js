/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const hammingDistance = require(path.join(__dirname, '..', 'algorithms', 'hammingDistance.js'))

// Test
describe('Hamming Distance Algorithm: hammingDistance(s1, s2)', () => {
  it('Should return the correct Hamming distance between two strings of equal length.', () => {
    expect(hammingDistance('test', 'rtst')).to.eql(2)
  })
  it('Should return -1 if the two strings are not of equal length.', () => {
    expect(hammingDistance('test', 'rts')).to.eql(-1)
  })
})
