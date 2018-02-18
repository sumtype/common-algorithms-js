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
    global.rayCasting = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var rayCasting = function rayCasting () {
    var shape = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
    var point = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null

    if (shape === null || point === null) return null
    var count = 0
    for (var i = 0; i < shape.length; i++) {
      if (intersects(shape[i], shape[(i + 1) % shape.length], point.x, point.y)) ++count
    } return !!(count % 2)
  }

  var intersects = function intersects (a, b, x, y) {
    if (a.y <= b.y) {
      if (y <= a.y || y > b.y) return false
      if (x >= a.x && x >= b.x) return false
      if (x < a.x && x < b.x) return true
      return (y - a.y) / (x - a.x) > (b.y - a.y) / (b.x - a.x)
    }
    return intersects(b, a, x, y)
  }

  exports.default = rayCasting
})
