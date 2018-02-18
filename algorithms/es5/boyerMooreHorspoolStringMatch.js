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
    global.boyerMooreHorspoolStringMatch = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var boyerMooreHorspoolStringMatch = function boyerMooreHorspoolStringMatch () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
    var alphabetSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 256

    if (pattern.length > input.length || pattern.length === 0) return null
    var skip = new Array(alphabetSize).fill(pattern.length)
    for (var i = 0; i < pattern.length - 1; i++) {
      skip[pattern.charCodeAt(i)] = pattern.length - i - 1
    } var k = pattern.length - 1
    while (k < input.length) {
      var j = pattern.length - 1
      i = k
      while (j >= 0 && input[i] === pattern[j]) {
        j -= 1
        i -= 1
      }
      if (j === -1) return i + 1
      k += skip[input.charCodeAt(k)]
    }
    return null
  }

  exports.default = boyerMooreHorspoolStringMatch
})
