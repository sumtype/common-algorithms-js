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
    global.rabinKarpStringMatch = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var rabinKarpStringMatch = function rabinKarpStringMatch () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
    var check = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null
    var prime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2147483647
    var radix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1024
    var rm = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1
    var patternHash = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : hashString(pattern, pattern.length, radix, prime)
    var inputHash = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : hashString(input, pattern.length, radix, prime)

    if (input.length < pattern.length) return -1
    if (patternHash === inputHash && doubleCheck(input, pattern, 0, check)) return 0
    for (var i = 1; i <= pattern.length - 1; i++) {
      rm = radix * rm % prime
    } for (var _i = pattern.length, offset = _i - pattern.length + 1; _i < input.length; _i++, offset = _i - pattern.length + 1) {
      inputHash = ((inputHash + prime - rm * input.charCodeAt(_i - pattern.length) % prime) % prime * radix + input.charCodeAt(_i)) % prime
      if (patternHash === inputHash && doubleCheck(input, pattern, offset, check)) return offset
    }
    return -1
  }

  var hashString = function hashString (string, length, radix, prime) {
    var hash = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0

    for (var i = 0; i < length; i++) {
      hash = parseInt(radix * hash + string.charCodeAt(i)) % prime
    } return hash
  }

  var doubleCheck = function doubleCheck (input, pattern, index, check) {
    if (check) {
      for (var i = 0; i < pattern.length; i++) {
        if (pattern.charAt(i) !== input.charAt(i + index)) return false
      }
    } return true
  }

  exports.default = rabinKarpStringMatch
})
