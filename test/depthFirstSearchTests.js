/* eslint-env mocha */
const path = require('path')
const depthFirstSearch = require(path.join(__dirname, '..', 'algorithms', 'depthFirstSearch.js'))
const expect = require('chai').expect
describe('Depth First Search Algorithm: depthFirstSearch(input)', () => {
  it('Should return true when given a conncted graph\'s adjacency matrix.', () => {
    expect(depthFirstSearch([[0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]])).to.eql(true)
    expect(depthFirstSearch([[0, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]])).to.eql(true)
  })
  it('Should return false when given a disconncted graph\'s adjacency matrix.', () => {
    expect(depthFirstSearch([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]])).to.eql(false)
  })
})
