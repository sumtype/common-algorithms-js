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
    global.sorensenDiceCoefficient = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var sorensenDiceCoefficient = function sorensenDiceCoefficient () {
    var s1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
    var s2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null

    if (s1 === null || s2 === null) return null
    var intersection = 0
    if (s1.length < 1 || s2.length < 1) return 0
    for (var i = 0; i < s1.length - 1; i++) {
      for (var j = 0; j < s2.length - 1; j++) {
        if (s1.substr(i, 2) === s2.substr(i, 2)) {
          intersection += 1
          break
        }
      }
    }
    return 2.0 * intersection / (s1.length + s2.length - 2)
  }

  exports.default = sorensenDiceCoefficient
})
