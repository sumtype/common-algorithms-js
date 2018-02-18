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
    global.bezierCurve = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var bezierCurve = function bezierCurve () {
    var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []

    var c = [1]
    var curve = {
      controlPoints: [],
      get: function get (pointOnCurve) {
        var res = { x: 0, y: 0 }
        var a = 1
        var b = 1
        var c = []
        for (var i = 0; i < this.controlPoints.length; ++i) {
          c.push(a)
          a *= pointOnCurve
        }
        for (var _i = this.controlPoints.length - 1; _i >= 0; --_i) {
          res.x += this.controlPoints[_i].x * c[_i] * b
          res.y += this.controlPoints[_i].y * c[_i] * b
          b *= 1 - pointOnCurve
        }
        return res
      }
    }
    for (var i = 1; i < points.length; ++i) {
      c.push(0)
      for (var j = i; j >= 1; --j) {
        c[j] += c[j - 1]
      }
    }
    for (var _i2 = 0; _i2 < points.length; ++_i2) {
      curve.controlPoints.push({ x: c[_i2] * points[_i2].x, y: c[_i2] * points[_i2].y })
    } return curve
  }

  exports.default = bezierCurve
})
