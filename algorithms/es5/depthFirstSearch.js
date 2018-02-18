(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory)
  } else if (typeof exports !== 'undefined') {
    factory(exports)
  } else {
    var mod = {
      exports: {}
    }
    factory(mod.exports)
    global.depthFirstSearch = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var depthFirstSearch = function depthFirstSearch () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

    if (input === null) return null
    var reach = []
    var totalConnections = 0
    for (var i = 0; i < input.length; i++) {
      reach[i] = 0
    }search(0, reach, input.length, input)
    for (var _i = 0; _i < input.length; _i++) {
      if (reach[_i]) totalConnections += 1
    } if (totalConnections === input.length) return true
    return false
  }

  var search = function search (value, reach, numberOfVertices, adjacencyMatrix) {
    reach[value] = 1
    for (var i = 0; i < numberOfVertices; i++) {
      if (adjacencyMatrix[value][i] && !reach[i]) search(i, reach, numberOfVertices, adjacencyMatrix)
    }
  }

  exports.default = depthFirstSearch
})
