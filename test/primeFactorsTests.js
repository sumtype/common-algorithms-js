/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const primeFactors = require(path.join(__dirname, '..', 'algorithms', 'primeFactors.js'))

// Test
describe('Prime Factors Algorithm: primeFactors(number)', () => {
  it('Should return the prime factors of the given integer.', () => {
    expect(primeFactors(18).toString()).to.eql([2, 3, 3].toString())
    expect(primeFactors(600851475143).toString()).to.eql([71, 839, 1471, 6857].toString())
  })
})
