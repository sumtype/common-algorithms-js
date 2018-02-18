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
    global.powerSet = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var powerSet = function powerSet () {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

    if (array === null) return null
    var powerSet = [[]]
    for (var i = 0; i < array.length; i++) {
      for (var j = 0, length = powerSet.length; j < length; j++) {
        powerSet.push(powerSet[j].concat(array[i]))
      }
    } return powerSet
  }

  exports.default = powerSet
})
