/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const areAnagrams = require(path.join(__dirname, '..', 'algorithms', 'areAnagrams'))

// Test
describe('Are Anagrams Algorithm: bezierCurve(points)', () => {
  it('Should return the correct boolean depending on whether the input array of strings are anagrams of one another.', () => {
    expect(areAnagrams(['acb', 'bac', 'cab'])).to.eql(true)
    expect(areAnagrams(['ab', 'bac', 'cab'])).to.eql(false)
    expect(areAnagrams(['cab', 'bca', 'abc', 'bac', 'cba', 'acb'])).to.eql(true)
    expect(areAnagrams(['cab', 'bca', 'bac', 'cba', 'acd'])).to.eql(false)
    expect(areAnagrams([])).to.eql(false)
    expect(areAnagrams(['cab'])).to.eql(false)
    expect(areAnagrams(['cb', 'bc'])).to.eql(true)
  })
})
