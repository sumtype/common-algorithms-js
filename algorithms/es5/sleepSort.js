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
    global.sleepSort = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })

  function _toConsumableArray (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i]
      }

      return arr2
    } else {
      return Array.from(arr)
    }
  }

  var sleepSort = function sleepSort () {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
    var cb = arguments[1]

    if (array === null) return null
    var negative = []
    var positive = []
    var max = Math.max.apply(Math, _toConsumableArray(array.map(function (n) {
      return Math.abs(n)
    })))
    var min = Math.min.apply(Math, _toConsumableArray(array))
    for (var i = 0; i < array.length; i++) {
      setTimeout(wake(array[i], max, min, array.length, negative, positive, cb), Math.abs(array[i]) * 3)
    }
  }

  var wake = function wake (n, max, min, arrayLength, negative, positive, cb) {
    return function () {
      n < 0 ? negative.unshift(n) : positive.push(n)
      if ((n === max || n === min) && negative.concat(positive).length === arrayLength) cb(negative.concat(positive))
    }
  }

  exports.default = sleepSort
})
