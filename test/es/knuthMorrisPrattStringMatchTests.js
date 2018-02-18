'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { knuthMorrisPrattStringMatch } from '../../es'

const expect = chai.expect

// Test
describe('Knuth-Morris-Pratt String Match Algorithm: knuthMorrisPrattStringMatch(input, pattern)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', () => {
    expect(knuthMorrisPrattStringMatch('test', 'est')).to.eql(1)
    expect(knuthMorrisPrattStringMatch('tafsesrt', 'esrt')).to.eql(4)
    expect(knuthMorrisPrattStringMatch('testtest', 'stt')).to.eql(2)
    expect(knuthMorrisPrattStringMatch('testtest', 'test')).to.eql(0)
    expect(knuthMorrisPrattStringMatch('testtest', 'ttest')).to.eql(3)
  })
  it('Should return null when the given pattern does not exist inside the input string.', () => {
    expect(knuthMorrisPrattStringMatch('test', 'xyz')).to.eql(null)
  })
  it('Should return null when the given pattern is longer than the input string.', () => {
    expect(knuthMorrisPrattStringMatch('test', 'xyzsda')).to.eql(null)
  })
  it('Should return null when there is no input string or input pattern.', () => {
    expect(knuthMorrisPrattStringMatch('test')).to.eql(null)
    expect(knuthMorrisPrattStringMatch()).to.eql(null)
  })
})
