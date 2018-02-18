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
    global.arePalindromes = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var arePalindromes = function arePalindromes () {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
    return s.length < 1 ? false : s.map(function (e) {
      for (var i = 0, j = e.length - 1, halfway = Math.floor(e.length / 2); i < halfway; i++, j--) {
        if (e[i] !== e[j]) return false
      } return true
    }).every(function (e) {
      return e
    })
  }

  exports.default = arePalindromes
})
