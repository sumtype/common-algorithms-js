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
    global.sattoloCycle = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var sattoloCycle = function sattoloCycle () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
    var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : input.slice()

    if (input.length <= 1) return input
    for (var i = array.length - 1; i > 0; i--) {
      array = swapIndicies(array, i, Math.floor(Math.random() * i))
    } return array
  }

  var swapIndicies = function swapIndicies (array, index, newIndex) {
    var temp = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : array[index]

    array[index] = array[newIndex]
    array[newIndex] = temp
    return array
  }

  exports.default = sattoloCycle
})
