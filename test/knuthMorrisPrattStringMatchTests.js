/* eslint-env mocha */
const path = require('path')
const knuthMorrisPrattStringMatch = require(path.join(__dirname, '..', 'algorithms', 'knuthMorrisPrattStringMatch.js'))
const expect = require('chai').expect
describe('Knuth-Morris-Pratt String Match Algorithm: knuthMorrisPrattStringMatch(input, pattern)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', () => {
    expect(knuthMorrisPrattStringMatch('test', 'est')).to.eql(1)
  })
  it('Should return -1 when the given pattern does not exist inside the input string.', () => {
    expect(knuthMorrisPrattStringMatch('test', 'xyz')).to.eql(-1)
  })
  it('Should return -1 when the given pattern is longer than the input string.', () => {
    expect(knuthMorrisPrattStringMatch('test', 'xyzsda')).to.eql(-1)
  })
})
