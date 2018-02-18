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
    global.bubbleSort = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var bubbleSort = function bubbleSort () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

    if (input === null) return input
    for (var i = 0, index = i; i < input.length; i++, index = i) {
      for (var j = i + 1; j < input.length; j++) {
        if (input[index] > input[j]) index = j
      } if (index !== i) {
        var swap = input[i]
        input[i] = input[index]
        input[index] = swap
      }
    }
    return input
  }

  exports.default = bubbleSort
})
