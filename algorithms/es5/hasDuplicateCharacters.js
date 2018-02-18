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
    global.hasDuplicateCharacters = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var hasDuplicateCharacters = function hasDuplicateCharacters () {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ''
    var characters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set(s)
    return characters.size !== s.length
  }

  exports.default = hasDuplicateCharacters
})
