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
    global.bruteForceStringMatch = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var bruteForceStringMatch = function bruteForceStringMatch () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''

    if (pattern.length > input.length || input === '' || pattern === '') return null
    for (var i = 0, index = i; i < input.length; i++, index = i) {
      for (var j = 0; j < pattern.length; j++) {
        index = pattern[j] === input[index] ? index + 1 : null
      } if (index - i === pattern.length) return i
    }
    return null
  }

  exports.default = bruteForceStringMatch
})
