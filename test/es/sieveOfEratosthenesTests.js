'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { sieveOfEratosthenes } from '../../es'

const expect = chai.expect

// Test
describe('Sieve of Eratosthenes Algorithm: sieveOfEratosthenes(n)', () => {
  it('Should return the primes up to the specified integer input', () => {
    expect(sieveOfEratosthenes(0).toString()).to.eql(([]).toString())
    expect(sieveOfEratosthenes(1).toString()).to.eql(([]).toString())
    expect(sieveOfEratosthenes(2).toString()).to.eql(([2]).toString())
    expect(sieveOfEratosthenes(3).toString()).to.eql(([2, 3]).toString())
    expect(sieveOfEratosthenes(100).toString()).to.eql(([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]).toString())
    expect(sieveOfEratosthenes().toString()).to.eql([].toString())
  })
})
