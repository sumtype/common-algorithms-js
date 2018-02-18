/*
  A JavaScript module which outputs a bezier-curve object given a series of points.  Provides a get() function on the output curve object that takes a point on the curve (between 0, the start, and 1, the end) and returns a coordinate object of the form {x: #, y: #}.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: Felipe Ribeiro, "algorithms.js", https://github.com/felipernb/algorithms.js, https://github.com/felipernb/algorithms.js/blob/master/src/algorithms/geometry/bezier_curve.js
*/

'use strict'

const bezierCurve = (points = []) => {
  let c = [1]
  const curve = {
    controlPoints: [],
    get: function (pointOnCurve) {
      let res = {x: 0, y: 0}
      let a = 1
      let b = 1
      let c = []
      for (let i = 0; i < this.controlPoints.length; ++i) {
        c.push(a)
        a *= pointOnCurve
      }
      for (let i = this.controlPoints.length - 1; i >= 0; --i) {
        res.x += this.controlPoints[i].x * c[i] * b
        res.y += this.controlPoints[i].y * c[i] * b
        b *= 1 - pointOnCurve
      }
      return res
    }
  }
  for (let i = 1; i < points.length; ++i) {
    c.push(0)
    for (let j = i; j >= 1; --j) c[j] += c[j - 1]
  }
  for (let i = 0; i < points.length; ++i) curve.controlPoints.push({x: c[i] * points[i].x, y: c[i] * points[i].y})
  return curve
}

export default bezierCurve
