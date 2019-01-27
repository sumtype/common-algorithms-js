'use strict'

// NPM Modules
import chai from 'chai'
import uuid from 'uuid/v4'

// Algorithm
import { knuthMorrisPrattStringMatch } from '../../es'

const expect = chai.expect

// Test
describe('Knuth-Morris-Pratt String Match Algorithm: knuthMorrisPrattStringMatch(input, pattern)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string', () => {
    for (let i = 0; i < 10000; i++) {
      let string = uuid()
      let index = Math.floor(Math.random() * (string.length / 2))
      let pattern = string.substr(index, Math.floor(Math.random() * string.length + 2))
      expect(knuthMorrisPrattStringMatch(string, pattern)).to.eql(string.indexOf(pattern))
    }
  })
  it('Should return null when the given pattern does not exist inside the input string', () => {
    expect(knuthMorrisPrattStringMatch('test', 'xyz')).to.eql(null)
  })
  it('Should return null when the given pattern is longer than the input string', () => {
    expect(knuthMorrisPrattStringMatch('test', 'xyzsda')).to.eql(null)
  })
  it('Should return null when there is no input string or input pattern', () => {
    expect(knuthMorrisPrattStringMatch('test')).to.eql(null)
    expect(knuthMorrisPrattStringMatch()).to.eql(null)
  })
})
