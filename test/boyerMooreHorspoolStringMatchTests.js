/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const boyerMooreHorspoolStringMatch = require(path.join(__dirname, '..', 'algorithms', 'boyerMooreHorspoolStringMatch.js'))

// Test
describe('Boyer-Moore-Horspool String Match Algorithm: boyerMooreHorspoolStringMatch(input, pattern, alphabetSize)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', () => {
    expect(boyerMooreHorspoolStringMatch('test', 'test')).to.eql(0)
    expect(boyerMooreHorspoolStringMatch('test', 'est')).to.eql(1)
    expect(boyerMooreHorspoolStringMatch('teststst', 'st')).to.eql(2)
    expect(boyerMooreHorspoolStringMatch('teststst', 't')).to.eql(0)
  })
  it('Should return -1 when the given pattern does not exist inside the input string.', () => {
    expect(boyerMooreHorspoolStringMatch('test', 'xyz')).to.eql(-1)
  })
  it('Should return -1 when the given pattern is longer than the input string.', () => {
    expect(boyerMooreHorspoolStringMatch('test', 'xyzsda')).to.eql(-1)
  })
})
