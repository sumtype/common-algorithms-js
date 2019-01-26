'use strict'

var _chai = require('chai')

var _chai2 = _interopRequireDefault(_chai)

var _es = require('../../es5')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var expect = _chai2.default.expect

describe('Kahn Topological Sort ES5 Algorithm: KahnTopologicalSort(dependenciesArray)', function () {
  it('Should return an array of elements been sorted based on their dependencies', function (done) {
    var input = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['F', 'D'], ['D', 'E'], ['C', 'E']]
    var output = ['F', 'D', 'A', 'B', 'C', 'E']
    var result = (0, _es.kahnTopologicalSort)(input)
    expect(output.toString()).to.eql(result.toString())
    done()
  })

  it('Shuld throw exeption in dependencies contains cycle', function () {
    var input = [['A', 'B'], ['B', 'A'], ['A', 'C']]
    expect(function () {
      (0, _es.kahnTopologicalSort)(input)
    }).to.throw(Error)
  })

  it('Should return null if the input array is not provided.', function () {
    expect((0, _es.kahnTopologicalSort)()).to.eql(null)
  })
})
