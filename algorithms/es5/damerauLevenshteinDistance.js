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
    global.damerauLevenshteinDistance = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var matrix = null
  var sd = null
  var combinedStrings = null

  var damerauLevenshteinDistance = function damerauLevenshteinDistance () {
    var s1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var s2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''

    if (s1.length === 0) return s2.length
    if (s2.length === 0) return s1.length
    matrix = []
    sd = {}
    combinedStrings = s1 + s2
    matrix = setupMatrix(s1, s2)
    for (var i = 0; i < s1.length + s2.length; i++) {
      if (!sd.hasOwnProperty(combinedStrings.charAt(i))) sd[combinedStrings.charAt(i)] = 0
    }matrix = updateMatrix(s1, s2)
    return matrix[s1.length + 1][s2.length + 1]
  }

  var setupMatrix = function setupMatrix (s1, s2) {
    matrix[0] = [s1.length + s2.length]
    for (var i = 0; i <= s1.length; i++) {
      matrix[i + 1] = []
      matrix[i + 1][1] = i
      matrix[i + 1][0] = s1.length + s2.length
    }
    for (var _i = 0; _i <= s2.length; _i++) {
      matrix[1][_i + 1] = _i
      matrix[0][_i + 1] = s1.length + s2.length
    }
    return matrix
  }

  var updateMatrix = function updateMatrix (s1, s2) {
    for (var i = 1, database = 0; i <= s1.length; i++, database = 0) {
      for (var j = 1, i1 = sd[s2[j - 1]], j1 = database; j <= s2.length; j++, i1 = sd[s2[j - 1]], j1 = database) {
        matrix[i + 1][j + 1] = s1[i - 1] === s2[j - 1] ? matrix[i][j] : matrix[i + 1][j + 1] = Math.min(matrix[i][j], Math.min(matrix[i + 1][j], matrix[i][j + 1])) + 1
        if (s1[i - 1] === s2[j - 1]) database = j
        matrix[i + 1][j + 1] = Math.min(matrix[i + 1][j + 1], matrix[i1][j1] + (i - i1 - 1) + 1 + (j - j1 - 1))
      }
      sd[s1[i - 1]] = i
    }
    return matrix
  }

  exports.default = damerauLevenshteinDistance
})
