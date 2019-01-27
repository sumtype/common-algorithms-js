'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { arePalindromes } from '../../es'

const expect = chai.expect

// Test
describe('Are Palindromes Algorithm: arePalindromes(strings)', () => {
  it('Should return the correct boolean depending on whether the input array of strings are all palindromes', () => {
    expect(arePalindromes(['aba'])).to.eql(true)
    expect(arePalindromes(['abaa'])).to.eql(false)
    expect(arePalindromes(['cabac'])).to.eql(true)
    expect(arePalindromes(['cabac', 'babab', 'darad'])).to.eql(true)
    expect(arePalindromes(['cabac', 'babab', 'dara'])).to.eql(false)
    expect(arePalindromes([])).to.eql(false)
    expect(arePalindromes()).to.eql(false)
  })
})
