/*
  A JavaScript module which performs a sleep sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

module.exports = exports = function (array, cb) {
  var negative = [], positive = [], i = null, max = Math.max.apply(null, array.map(function(n) { return Math.abs(n) })), min = Math.min.apply(null, array)
  for (i = 0; i < array.length; i++) setTimeout(wake(array[i], max, min, array.length, negative, positive, cb), Math.abs(array[i]) * 2)
}

function wake(n, max, min, arrayLength, negative, positive, cb) {
  return function() {
    n < 0 ? negative.unshift(n) : positive.push(n)
    if ((n === max || n === min) && negative.concat(positive).length === arrayLength) cb(negative.concat(positive))
  }
}
