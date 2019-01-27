'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { longestCommonSubstring } from '../../es'

const expect = chai.expect

// Test
describe('Longest Common Substring Algorithm: longestCommonSubstring(input1, input2)', () => {
  it('Should return the longest common substring in the input strings when there is at least one common substring', () => {
    expect(longestCommonSubstring('test', 'est')).to.eql('est')
    expect(longestCommonSubstring('tes', 'est')).to.eql('es')
  })
  it('Should return null when there are no common substrings in the input strings', () => {
    expect(longestCommonSubstring('test', 'xyz')).to.eql(null)
  })
  it('Should return null when either input string is unspecified', () => {
    expect(longestCommonSubstring('test')).to.eql(null)
    expect(longestCommonSubstring()).to.eql(null)
  })
})
