'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { boyerMooreStringMatch } from '../../es6'

const expect = chai.expect

// Test
describe('Boyer-Moore String Match Algorithm: boyerMooreStringMatch(input, pattern)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', () => {
    expect(boyerMooreStringMatch('test', 'test')).to.eql(0)
    expect(boyerMooreStringMatch('test', 'est')).to.eql(1)
    expect(boyerMooreStringMatch('teststst', 'st')).to.eql(2)
  })
  it('Should return -1 when the given pattern does not exist inside the input string.', () => {
    expect(boyerMooreStringMatch('test', 'xyz')).to.eql(-1)
  })
  it('Should return -1 when the given pattern is longer than the input string.', () => {
    expect(boyerMooreStringMatch('test', 'xyzsda')).to.eql(-1)
  })
})
