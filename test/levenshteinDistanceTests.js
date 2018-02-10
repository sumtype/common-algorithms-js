/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const levenshteinDistance = require(path.join(__dirname, '..', 'algorithms', 'levenshteinDistance.js'))

// Test
describe('Levenshtein Distance Algorithm: levenshteinDistance(input1, input2)', () => {
  it('Should return the levenshtein distance between the input strings.', () => {
    expect(levenshteinDistance('test', '')).to.eql(4)
    expect(levenshteinDistance('tex', 'esr')).to.eql(3)
    expect(levenshteinDistance('text', 'rext')).to.eql(1)
  })
})
