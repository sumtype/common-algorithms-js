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
    global.longestCommonSubsequence = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var longestCommonSubsequence = function longestCommonSubsequence () {
    var s1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
    var s2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null

    if (s1 === null || s2 === null) return null
    var c = []
    for (var i = 0; i <= s1.length; i++) {
      c.push([0])
    } for (var _i = 0; _i < s2.length; _i++) {
      c[0].push(0)
    } for (var _i2 = 0; _i2 < s1.length; _i2++) {
      for (var j = 0; j < s2.length; j++) {
        c[_i2 + 1][j + 1] = s1[_i2] === s2[j] ? c[_i2][j] + 1 : Math.max(c[_i2 + 1][j], c[_i2][j + 1])
      }
    } var sequence = (function backTrack (n1, n2) {
      if (n1 * n2 === 0) return ''
      if (s1[n1 - 1] === s2[n2 - 1]) return backTrack(n1 - 1, n2 - 1) + s1[n1 - 1]
      return c[n1][n2 - 1] > c[n1 - 1][n2] ? backTrack(n1, n2 - 1) : backTrack(n1 - 1, n2)
    }(s1.length, s2.length))
    if (sequence === '') sequence = null
    return sequence
  }

  exports.default = longestCommonSubsequence
})
