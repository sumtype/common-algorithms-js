/* eslint-env mocha */

'use strict'

// Native Node Modules
const path = require('path')

// NPM Modules
const expect = require('chai').expect

// Algorithm
const depthFirstSearch = require(path.join(__dirname, '..', 'algorithms', 'depthFirstSearch.js'))

// Test
describe('Depth First Search Algorithm: depthFirstSearch(input)', () => {
  it('Should return true when given a conncted graph\'s adjacency matrix.', () => {
    expect(depthFirstSearch([[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]])).to.eql(true)
    expect(depthFirstSearch([[0, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]])).to.eql(true)
  })
  it('Should return false when given a disconncted graph\'s adjacency matrix.', () => {
    expect(depthFirstSearch([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]])).to.eql(false)
  })
})
