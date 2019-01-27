'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { damerauLevenshteinDistance } from '../../es'

const expect = chai.expect

// Test
describe('Damerau-Levenshtein Distance Algorithm: damerauLevenshteinDistance(input1, input2)', () => {
  it('Should return the Damerau-Levenshtein distance between the input strings', () => {
    expect(damerauLevenshteinDistance('test', '')).to.eql(4)
    expect(damerauLevenshteinDistance('tex', 'esr')).to.eql(3)
    expect(damerauLevenshteinDistance('text', 'rext')).to.eql(1)
    expect(damerauLevenshteinDistance('ca', 'abc')).to.eql(2)
    expect(damerauLevenshteinDistance('', 'abc')).to.eql(3)
    expect(damerauLevenshteinDistance('')).to.eql(0)
    expect(damerauLevenshteinDistance()).to.eql(0)
  })
})
