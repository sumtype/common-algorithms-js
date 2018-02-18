'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { boyerMooreHorspoolStringMatch } from '../../es6'

const expect = chai.expect

// Test
describe('Boyer-Moore-Horspool String Match Algorithm: boyerMooreHorspoolStringMatch(input, pattern, alphabetSize)', () => {
  it('Should return the proper index value of the pattern in the input string when it exists in the input string.', () => {
    expect(boyerMooreHorspoolStringMatch('test', 'test')).to.eql(0)
    expect(boyerMooreHorspoolStringMatch('test', 'est')).to.eql(1)
    expect(boyerMooreHorspoolStringMatch('teststst', 'st')).to.eql(2)
    expect(boyerMooreHorspoolStringMatch('teststst', 't')).to.eql(0)
  })
  it('Should return -1 when the given pattern does not exist inside the input string.', () => {
    expect(boyerMooreHorspoolStringMatch('test', 'xyz')).to.eql(-1)
  })
  it('Should return -1 when the given pattern is longer than the input string.', () => {
    expect(boyerMooreHorspoolStringMatch('test', 'xyzsda')).to.eql(-1)
  })
})
