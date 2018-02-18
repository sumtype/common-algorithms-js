'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { matchingDelimiters } from '../../es6'

const expect = chai.expect

// Test
describe('Matching Delimiters Algorithm: matchingDelimiters(string, mapping)', () => {
  it('Should correctly return whether the string has matching opening and closing delimiters based on the mapping.', () => {
    expect(matchingDelimiters('[]{}', {'[': ']', '{': '}'})).to.eql(true)
    expect(matchingDelimiters('[{}', {'[': ']'})).to.eql(false)
    expect(matchingDelimiters('[{}', {'[': '}'})).to.eql(true)
    expect(matchingDelimiters('b[{}aa', {'b': 'a'})).to.eql(false)
    expect(matchingDelimiters('b[{}a', {'b': 'a'})).to.eql(true)
  })
})
