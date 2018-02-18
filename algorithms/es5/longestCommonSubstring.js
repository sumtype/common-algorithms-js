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
    global.longestCommonSubstring = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var longestCommonSubstring = function longestCommonSubstring () {
    var s1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
    var s2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null

    if (s1 === null || s2 === null) return null
    var substring = null
    var table = []
    var maxLength = 0
    var currentSubstringIndex = 0
    var previousSubstringIndex = 0
    for (var i = 0; i < s1.length; i++) {
      table[i] = new Array(s2.length).fill(0)
    } for (var _i = 0; _i < s1.length; _i++) {
      for (var j = 0; j < s2.length; j++) {
        table[_i][j] = s1[_i] !== s2[j] ? 0 : _i === 0 || j === 0 ? 1 : table[_i - 1][j - 1] + 1
        if (table[_i][j] > maxLength) {
          maxLength = table[_i][j]
          currentSubstringIndex = _i - table[_i][j] + 1
          substring = previousSubstringIndex === currentSubstringIndex ? substring + s1[_i] : '' + s1.substr(currentSubstringIndex, _i + 1 - currentSubstringIndex)
          if (previousSubstringIndex !== currentSubstringIndex) previousSubstringIndex = currentSubstringIndex
        }
      }
    }
    return substring
  }

  exports.default = longestCommonSubstring
})
