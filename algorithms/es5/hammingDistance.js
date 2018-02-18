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
    global.hammingDistance = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var hammingDistance = function hammingDistance () {
    var s1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var s2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''
    var distance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0

    if (s1.length !== s2.length) return -1
    for (var i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) distance += 1
    } return distance
  }

  exports.default = hammingDistance
})
