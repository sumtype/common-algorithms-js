/* eslint-env mocha */
const path = require('path')
const longestCommonSubstring = require(path.join(__dirname, '..', 'algorithms', 'longestCommonSubstring.js'))
const expect = require('chai').expect
describe('Longest Common Substring Algorithm: longestCommonSubstring(input1, input2)', () => {
  it('Should return the longest common substring in the input strings when there is at least one common substring.', () => {
    expect(longestCommonSubstring('test', 'est')).to.eql('est')
    expect(longestCommonSubstring('tes', 'est')).to.eql('es')
  })
  it('Should return -1 when there are no common substrings in the input strings.', () => {
    expect(longestCommonSubstring('test', 'xyz')).to.eql(-1)
  })
})
