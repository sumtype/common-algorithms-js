'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { rabinKarpStringMatch } from '../../es'

const expect = chai.expect

// Test
describe('Rabin-Karp String Match Algorithm: rabinKarpStringMatch(input, pattern, check)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string', () => {
    expect(rabinKarpStringMatch('test', 'test', false)).to.eql(0)
    expect(rabinKarpStringMatch('test', 'est', false)).to.eql(1)
    expect(rabinKarpStringMatch('teststst', 'st', false)).to.eql(2)
    expect(rabinKarpStringMatch('test', 'test', true)).to.eql(0)
    expect(rabinKarpStringMatch('test', 'est', true)).to.eql(1)
    expect(rabinKarpStringMatch('tests', 'est', true)).to.eql(1)
    expect(rabinKarpStringMatch('teststst', 'st', true)).to.eql(2)
  })
  it('Should return null when the given pattern does not exist inside the input string', () => {
    expect(rabinKarpStringMatch('test', 'xyz', true)).to.eql(null)
    expect(rabinKarpStringMatch('test', 'xyz', false)).to.eql(null)
  })
  it('Should return null when the given pattern is longer than the input string', () => {
    expect(rabinKarpStringMatch('test', 'xyzsda', true)).to.eql(null)
    expect(rabinKarpStringMatch('test', 'xyzsda', false)).to.eql(null)
  })
  it('Should return null if either the input string or pattern are not provided', () => {
    expect(rabinKarpStringMatch('test')).to.eql(null)
    expect(rabinKarpStringMatch()).to.eql(null)
  })
})
