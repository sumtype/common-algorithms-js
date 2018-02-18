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
    global.sieveOfEratosthenes = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var sieveOfEratosthenes = function sieveOfEratosthenes () {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0

    var numbers = []
    if (n < 2) return numbers
    for (var i = 2; i <= n; i++) {
      numbers.push(i)
    } for (var _i = 2; _i <= Math.sqrt(n); _i++) {
      if (numbers[_i - 2]) {
        for (var j = Math.pow(_i, 2) - 2; j < n; j += _i) {
          numbers[j] = false
        }
      }
    } return numbers.filter(function (v) {
      return !!v
    })
  }

  exports.default = sieveOfEratosthenes
})
