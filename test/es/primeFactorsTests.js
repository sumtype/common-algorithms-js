'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { primeFactors } from '../../es'

const expect = chai.expect

// Test
describe('Prime Factors Algorithm: primeFactors(number)', () => {
  it('Should return the prime factors of the given integer', () => {
    expect(primeFactors(18).toString()).to.eql([2, 3, 3].toString())
    expect(primeFactors(600851475143).toString()).to.eql([71, 839, 1471, 6857].toString())
  })
  it('Should return null if no input integer is provided', () => {
    expect(primeFactors()).to.eql(null)
  })
})
