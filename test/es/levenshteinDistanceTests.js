'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { levenshteinDistance } from '../../es'

const expect = chai.expect

// Test
describe('Levenshtein Distance Algorithm: levenshteinDistance(input1, input2)', () => {
  it('Should return the levenshtein distance between the input strings', () => {
    expect(levenshteinDistance('test', '')).to.eql(4)
    expect(levenshteinDistance('tex', 'esr')).to.eql(3)
    expect(levenshteinDistance('text', 'rext')).to.eql(1)
    expect(levenshteinDistance('', 'rext')).to.eql(4)
  })
  it('Should return null if either string input is not specified', () => {
    expect(levenshteinDistance()).to.eql(null)
    expect(levenshteinDistance('')).to.eql(null)
  })
})
