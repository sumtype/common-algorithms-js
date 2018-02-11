/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const matchingDelimiters = require(path.join(__dirname, '..', 'algorithms', 'matchingDelimiters.js'))

// Test
describe('Matching Delimiters Algorithm: matchingDelimiters(string, mapping)', () => {
  it('Should correctly return whether the string has matching opening and closing delimiters based on the mapping.', () => {
    expect(matchingDelimiters('[]{}', {'[': ']', '{': '}'})).to.eql(true)
    expect(matchingDelimiters('[{}', {'[': ']'})).to.eql(false)
    expect(matchingDelimiters('[{}', {'[': '}'})).to.eql(true)
    expect(matchingDelimiters('b[{}aa', {'b': 'a'})).to.eql(false)
    expect(matchingDelimiters('b[{}a', {'b': 'a'})).to.eql(true)
  })
})
