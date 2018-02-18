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
    global.primeFactors = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var primeFactors = function primeFactors () {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6

    n = Math.abs(n)
    while (n > 1 && n % 2 === 0) {
      n = addFactor(n, a, 2)
    } while (n > 2 && n % 3 === 0) {
      n = addFactor(n, a, 3)
    } while (n > 4) {
      var p = s - 1
      var q = s + 1
      while (n > 4 && n % p === 0) {
        n = addFactor(n, a, p)
      } while (n > 4 && n % q === 0) {
        n = addFactor(n, a, q)
      }s += 6
    }
    return a
  }

  var addFactor = function addFactor () {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
    var n2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1

    a.push(n2)
    n /= n2
    return n
  }

  exports.default = primeFactors
})
