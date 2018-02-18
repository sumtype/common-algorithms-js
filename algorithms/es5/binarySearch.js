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
    global.binarySearch = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var binarySearch = function binarySearch () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null
    var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0
    var top = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : input.length - 1
    var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null

    if (input.length === 0) return null
    do {
      index = parseInt((bottom + top) / 2)
      if (value < input[index]) top = index - 1
      if (value > input[index]) bottom = index + 1
    } while (input[index] !== value && bottom <= top)
    if (value === input[index]) return index
    return null
  }

  exports.default = binarySearch
})
