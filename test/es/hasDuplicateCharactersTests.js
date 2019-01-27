'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { hasDuplicateCharacters } from '../../es'

const expect = chai.expect

// Test
describe('Has Duplicate Characters Algorithm: hasDuplicateCharacters(string)', () => {
  it('Should correctly return true or false depending on whether the input string has duplicate characters', () => {
    expect(hasDuplicateCharacters('dat')).to.eql(false)
    expect(hasDuplicateCharacters('ma')).to.eql(false)
    expect(hasDuplicateCharacters('cat')).to.eql(false)
    expect(hasDuplicateCharacters('hello')).to.eql(true)
    expect(hasDuplicateCharacters('motto')).to.eql(true)
  })
  it('Should return null when no input is provided', () => {
    expect(hasDuplicateCharacters()).to.eql(null)
  })
})
