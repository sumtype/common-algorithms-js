/*
  A JavaScript module using ray casting to determine whether a point of the form {x: #, y: #} is inside (true) or outside (false) a shape of the form [{x: #, y: #}, {x: #, y: #}, ...].
*/

'use strict'

const rayCasting = (shape = [], point = null, count = 0) => {
  if (shape.length === 0 || point === null) return false
  for (var i = 0; i < shape.length; i++) if (intersects(shape[i], shape[(i + 1) % shape.length], point.x, point.y)) ++count
  return !!(count % 2)
}

const intersects = (a = null, b = null, x = null, y = null) => {
  if (a.y <= b.y) {
    if (y <= a.y || y > b.y) return false
    if (x >= a.x && x >= b.x) return false
    if (x < a.x && x < b.x) return true
    return (y - a.y) / (x - a.x) > (b.y - a.y) / (b.x - a.x)
  }
  return intersects(b, a, x, y)
}

export default rayCasting
