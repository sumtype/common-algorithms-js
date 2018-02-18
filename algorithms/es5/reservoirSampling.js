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
    global.reservoirSampling = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var reservoirSampling = function reservoirSampling () {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0
    var output = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.slice(0, size)

    if (!array.length || size === 0) return []
    for (var i = size, j = Math.floor(Math.random() * (i - 2)) + 1; i < array.length; i++, j = Math.floor(Math.random() * (i - 2)) + 1) {
      if (j <= size) output[j] = array[i]
    } return output
  }

  exports.default = reservoirSampling
})
