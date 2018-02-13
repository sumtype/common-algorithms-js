/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const arePalindromes = require(path.join(__dirname, '..', 'algorithms', 'arePalindromes'))

// Test
describe('Are Palindromes Algorithm: arePalindromes(strings)', () => {
  it('Should return the correct boolean depending on whether the input array of strings are all palindromes.', () => {
    expect(arePalindromes(['aba'])).to.eql(true)
    expect(arePalindromes(['abaa'])).to.eql(false)
    expect(arePalindromes(['cabac'])).to.eql(true)
    expect(arePalindromes(['cabac', 'babab', 'darad'])).to.eql(true)
    expect(arePalindromes(['cabac', 'babab', 'dara'])).to.eql(false)
  })
})
