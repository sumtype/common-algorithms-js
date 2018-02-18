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
    var s1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var s2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
    var substring = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1
    var table = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : []
    var maxLength = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0
    var currentSubstringIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0
    var previousSubstringIndex = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0

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
