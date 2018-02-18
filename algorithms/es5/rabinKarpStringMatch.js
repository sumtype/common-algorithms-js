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
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
    var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null

    if (input === null || pattern === null || input.length < pattern.length) return null
    var prime = 2147483647
    var radix = 1024
    var rm = 1
    var patternHash = hashString(pattern, pattern.length, radix, prime)
    var inputHash = hashString(input, pattern.length, radix, prime)
    if (patternHash === inputHash) return 0
    for (var i = 1; i <= pattern.length - 1; i++) {
      rm = radix * rm % prime
    } for (var _i = pattern.length, offset = _i - pattern.length + 1; _i < input.length; _i++, offset = _i - pattern.length + 1) {
      inputHash = ((inputHash + prime - rm * input.charCodeAt(_i - pattern.length) % prime) % prime * radix + input.charCodeAt(_i)) % prime
      if (patternHash === inputHash) return offset
    }
    return null
  }

  var hashString = function hashString (string, length, radix, prime) {
    var hash = 0
    for (var i = 0; i < length; i++) {
      hash = parseInt(radix * hash + string.charCodeAt(i)) % prime
    } return hash
  }

  exports.default = rabinKarpStringMatch
})
