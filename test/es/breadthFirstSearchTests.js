'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { breadthFirstSearch } from '../../es'

const expect = chai.expect

// Test
describe('Breadth First Search Algorithm: breadthFirstSearch(input)', () => {
  it(`Should return true when given a conncted graph's adjacency matrix`, () => {
    expect(breadthFirstSearch([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]])).to.eql(true)
    expect(breadthFirstSearch([[0, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]])).to.eql(true)
  })
  it(`Should return false when given a disconncted graph's adjacency matrix`, () => {
    expect(breadthFirstSearch([[0, 1, 0, 0], [1, 0, 1, 0], [0, 0, 0, 0], [1, 0, 1, 0]])).to.eql(false)
  })
  it('Should return false there is no input graph', () => {
    expect(breadthFirstSearch()).to.eql(null)
  })
})
