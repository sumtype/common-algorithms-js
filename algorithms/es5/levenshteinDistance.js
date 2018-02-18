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
    global.levenshteinDistance = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var levenshteinDistance = function levenshteinDistance () {
    var s1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
    var s2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null

    if (s1 === null || s2 === null) return null
    if (s1.length === 0) return s2.length
    if (s2.length === 0) return s1.length
    var matrix = []
    for (var i = 0; i <= s2.length; i++) {
      matrix[i] = [i]
    } for (var _i = 0; _i <= s1.length; _i++) {
      matrix[0][_i] = _i
    } for (var _i2 = 1; _i2 <= s2.length; _i2++) {
      for (var j = 1; j <= s1.length; j++) {
        matrix[_i2][j] = s2.charAt(_i2 - 1) === s1.charAt(j - 1) ? matrix[_i2 - 1][j - 1] : Math.min(matrix[_i2 - 1][j - 1] + 1, Math.min(matrix[_i2][j - 1] + 1, matrix[_i2 - 1][j] + 1))
      }
    } return matrix[s2.length][s1.length]
  }

  exports.default = levenshteinDistance
})
