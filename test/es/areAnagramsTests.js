'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { areAnagrams } from '../../es'

const expect = chai.expect

// Test
describe('Are Anagrams Algorithm: areAnagrams(strings)', () => {
  it('Should return the correct boolean depending on whether the input array of strings are anagrams of one another', () => {
    expect(areAnagrams(['acb', 'bac', 'cab'])).to.eql(true)
    expect(areAnagrams(['ab', 'bac', 'cab'])).to.eql(false)
    expect(areAnagrams(['cab', 'bca', 'abc', 'bac', 'cba', 'acb'])).to.eql(true)
    expect(areAnagrams(['cab', 'bca', 'bac', 'cba', 'acd'])).to.eql(false)
    expect(areAnagrams([])).to.eql(false)
    expect(areAnagrams()).to.eql(false)
    expect(areAnagrams(['cab'])).to.eql(false)
    expect(areAnagrams(['cb', 'bc'])).to.eql(true)
  })
})
