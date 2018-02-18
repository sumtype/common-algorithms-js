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
    global.durstenfeldShuffle = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var durstenfeldShuffle = function durstenfeldShuffle () {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null

    if (input === null) return null
    var index = input.length
    while (index !== 0) {
      var shuffleIndex = Math.floor(Math.random() * index--)
      var swap = input[index]
      input[index] = input[shuffleIndex]
      input[shuffleIndex] = swap
    }
    return input
  }

  exports.default = durstenfeldShuffle
})
