/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const isPrime = require(path.join(__dirname, '..', 'algorithms', 'isPrime'))

// Test
describe('Is Prime Algorithm: isPrime(number)', () => {
  it('Should return the correct boolean value depending on whether the input number is a prime number.', () => {
    expect(isPrime(0)).to.eql(false)
    expect(isPrime(1)).to.eql(false)
    expect(isPrime(2)).to.eql(true)
    expect(isPrime(3)).to.eql(true)
    expect(isPrime(5)).to.eql(true)
    expect(isPrime(4)).to.eql(false)
    expect(isPrime(97)).to.eql(true)
  })
})
