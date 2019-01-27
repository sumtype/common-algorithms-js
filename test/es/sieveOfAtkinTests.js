'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { sieveOfAtkin } from '../../es'

const expect = chai.expect

// Test
describe('Sieve of Atkin Algorithm: sieveOfAtkin(n)', () => {
  it('Should return the primes up to the specified integer input', () => {
    expect(sieveOfAtkin(0).toString()).to.eql(([]).toString())
    expect(sieveOfAtkin(1).toString()).to.eql(([]).toString())
    expect(sieveOfAtkin(2).toString()).to.eql(([2]).toString())
    expect(sieveOfAtkin(3).toString()).to.eql(([2, 3]).toString())
    expect(sieveOfAtkin(100).toString()).to.eql(([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]).toString())
    expect(sieveOfAtkin().toString()).to.eql([].toString())
  })
})
