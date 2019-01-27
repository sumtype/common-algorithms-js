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
    global.breadthFirstSearch = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var breadthFirstSearch = function breadthFirstSearch () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

    if (input === null) return null
    var queue = []
    var visited = []
    var connected = true
    var search = function search (value, input, f, r) {
      for (var i = 0; i < input.length; i++) {
        if (input[value][i] && !visited[i]) queue[++r] = i
      } if (f <= r) {
        visited[queue[f]] = 1
        search(queue[f++], input, f, r)
      }
    }
    for (var i = 0; i < input.length; i++) {
      queue[i] = 0
      visited[i] = 0
    }
    search(0, input, 0, -1)
    for (var _i = 0; _i < visited.length; _i++) {
      if (!visited[_i]) connected = false
    } return connected
  }

  exports.default = breadthFirstSearch
})
