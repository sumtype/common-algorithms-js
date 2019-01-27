'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Breadth First Search Algorithm: breadthFirstSearch(input)', function () {
  it('Should return true when given a conncted graph\'s adjacency matrix', function () {
    expect((0, _es.breadthFirstSearch)([[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]])).to.eql(true)
    expect((0, _es.breadthFirstSearch)([[0, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0]])).to.eql(true)
  })
  it('Should return false when given a disconncted graph\'s adjacency matrix', function () {
    expect((0, _es.breadthFirstSearch)([[0, 1, 0, 0], [1, 0, 1, 0], [0, 0, 0, 0], [1, 0, 1, 0]])).to.eql(false)
  })
  it('Should return false there is no input graph', function () {
    expect((0, _es.breadthFirstSearch)()).to.eql(null)
  })
})
