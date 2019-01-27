'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { boyerMooreHorspoolStringMatch } from '../../es'

const expect = chai.expect

// Test
describe('Boyer-Moore-Horspool String Match Algorithm: boyerMooreHorspoolStringMatch(input, pattern, alphabetSize)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string', () => {
    expect(boyerMooreHorspoolStringMatch('test', 'test')).to.eql(0)
    expect(boyerMooreHorspoolStringMatch('test', 'est')).to.eql(1)
    expect(boyerMooreHorspoolStringMatch('teststst', 'st')).to.eql(2)
    expect(boyerMooreHorspoolStringMatch('teststst', 't')).to.eql(0)
    expect(boyerMooreHorspoolStringMatch('teststst', 't', 256)).to.eql(0)
  })
  it('Should return null when the given pattern does not exist inside the input string', () => {
    expect(boyerMooreHorspoolStringMatch('test', 'xyz')).to.eql(null)
    expect(boyerMooreHorspoolStringMatch('teststst')).to.eql(null)
    expect(boyerMooreHorspoolStringMatch('t', '')).to.eql(null)
    expect(boyerMooreHorspoolStringMatch()).to.eql(null)
  })
  it('Should return null when the given pattern is longer than the input string', () => {
    expect(boyerMooreHorspoolStringMatch('test', 'xyzsda')).to.eql(null)
  })
})
