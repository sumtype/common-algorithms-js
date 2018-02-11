/*
  A JavaScript module which returns the power set of an input array.
*/

'use strict'

module.exports = function (array) {
  var powerSet = [[]], i = null, j = null, length = null
  for (i = 0; i < array.length; i++) for (j = 0, length = powerSet.length; j < length; j++) powerSet.push(powerSet[j].concat(array[i]))
  return powerSet
}
