'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Kahn Topological Sort Algorithm: KahnTopologicalSort(edges)', function () {
  it('Should return a valid topological sorting of the input edges\' graph\'s nodes.', function () {
    expect((0, _es.kahnTopologicalSort)([['A', 'B'], ['A', 'C'], ['B', 'C'], ['F', 'D'], ['D', 'E'], ['C', 'E']])).to.deep.equal(['F', 'D', 'A', 'B', 'C', 'E'])
  })

  it('Should throw an exeption if the edges\' graph is not a directed acyclic graph.', function () {
    expect(function () {
      return (0, _es.kahnTopologicalSort)([['A', 'B'], ['B', 'A'], ['A', 'C']])
    }).to.throw()
  })

  it('Should return null if no edges are provided', function () {
    expect((0, _es.kahnTopologicalSort)()).to.equal(null)
  })
})
