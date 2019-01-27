'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { depthFirstSearch } from '../../es'

const expect = chai.expect

// Test
describe('Depth First Search Algorithm: depthFirstSearch(input)', () => {
  it('Should return true when given a conncted graph\'s adjacency matrix', () => {
    expect(depthFirstSearch([[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]])).to.eql(true)
    expect(depthFirstSearch([[0, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]])).to.eql(true)
  })
  it('Should return false when given a disconncted graph\'s adjacency matrix', () => {
    expect(depthFirstSearch([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]])).to.eql(false)
  })
  it('Should return null when no input is provided', () => {
    expect(depthFirstSearch()).to.eql(null)
  })
})
