'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { isPrime } from '../../es'

const expect = chai.expect

// Test
describe('Is Prime Algorithm: isPrime(number)', () => {
  it('Should return the correct boolean value depending on whether the input number is a prime number', () => {
    expect(isPrime(0)).to.eql(false)
    expect(isPrime(1)).to.eql(false)
    expect(isPrime(2)).to.eql(true)
    expect(isPrime(3)).to.eql(true)
    expect(isPrime(5)).to.eql(true)
    expect(isPrime(4)).to.eql(false)
    expect(isPrime(97)).to.eql(true)
  })
  it('Should return null when no input is provided', () => {
    expect(isPrime()).to.eql(null)
  })
})
