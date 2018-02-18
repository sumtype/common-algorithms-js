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
    global.isPrime = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var isPrime = function isPrime () {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

    if (n === null) return null
    if (n < 2) return false
    for (var i = 2; i <= Math.sqrt(n); ++i) {
      if (n % i === 0) return false
    } return true
  }

  exports.default = isPrime
})
