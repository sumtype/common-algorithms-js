/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const fibonacciNumber = require(path.join(__dirname, '..', 'algorithms', 'fibonacciNumber'))

// Test
describe('Fibonacci Number Algorithm: fibonacciNumber(number)', () => {
  it('Should return the correct nth Fibonacci number based on the input integer.', () => {
    expect(fibonacciNumber(0)).to.eql(0)
    expect(fibonacciNumber(1)).to.eql(1)
    expect(fibonacciNumber(2)).to.eql(1)
    expect(fibonacciNumber(3)).to.eql(2)
    expect(fibonacciNumber(4)).to.eql(3)
    expect(fibonacciNumber(5)).to.eql(5)
    expect(fibonacciNumber(6)).to.eql(8)
    expect(fibonacciNumber(7)).to.eql(13)
    expect(fibonacciNumber(8)).to.eql(21)
    expect(fibonacciNumber(9)).to.eql(34)
    expect(fibonacciNumber(10)).to.eql(55)
  })
})
