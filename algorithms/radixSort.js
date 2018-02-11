/*
  A JavaScript module which performs a radix sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

module.exports = exports = function (input, base) {
  for (var i = 0; i < Math.round(Math.log(Math.max.apply(null, input.map(function (n) { return Math.abs(n) }))) / Math.log(base)) + 1; i++) input = merge(split(input, base, i))
  return merge(splitBySign(input))
}

function merge(array) {
  var output = [], i = null
  for (i = 0; i < array.length; i++) output = output.concat(array[i])
  return output
}

function split(array, base, digit) {
  var buckets = [], i = null
  for (i = 0; i < base; i++) buckets.push([])
  for (i = 0; i < array.length; i++) buckets[Math.abs(Math.floor(array[i] / Math.pow(base, digit)) % base)].push(array[i])
  return buckets
}

function splitBySign(array) {
  var buckets = [[], []], i = null
  for (i = 0; i < array.length; i++) array[i] < 0 ? buckets[0].unshift(array[i]) : buckets[1].push(array[i])
  return buckets
}
