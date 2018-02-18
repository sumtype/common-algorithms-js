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
    global.fibonacciNumber = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var fibonacciNumber = function fibonacciNumber () {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
    return n < 0 ? null : Math.floor(Math.pow((1 + Math.sqrt(5)) / 2, n) / Math.sqrt(5) + 0.5)
  }

  exports.default = fibonacciNumber
})
