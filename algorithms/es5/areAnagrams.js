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
    global.areAnagrams = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var areAnagrams = function areAnagrams () {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
    return s.length <= 1 || !s.every(function (e) {
      return e.length === s[0].length
    }) ? false : s.map(function (e) {
      return e.split('').map(function (c) {
        return c.codePointAt(0)
      }).reduce(function (a, b) {
        return a + b
      })
    }).every(function (e, i, a) {
      return e === a[0]
    })
  }

  exports.default = areAnagrams
})
