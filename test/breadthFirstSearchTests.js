/* eslint-env mocha */
const path = require('path')
const breadthFirstSearch = require(path.join(__dirname, '..', 'algorithms', 'breadthFirstSearch.js'))
const expect = require('chai').expect
describe('Breadth First Search Algorithm: breadthFirstSearch(input)', () => {
  it('Should return true when given a conncted graph\'s adjacency matrix.', () => {
    expect(breadthFirstSearch([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]])).to.eql(true)
    expect(breadthFirstSearch([[0, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]])).to.eql(true)
  })
  it('Should return false when given a disconncted graph\'s adjacency matrix.', () => {
    expect(breadthFirstSearch([[0, 1, 0, 0], [1, 0, 1, 0], [0, 0, 0, 0], [1, 0, 1, 0]])).to.eql(false)
  })
})
