/*
  A JavaScript module which performs a linear search for a given value inside an input array.  If the specified value is found, the index of the element in the array with that value is returned.  If the specified value is not found in the array -1 is returned.
*/

'use strict'

module.exports = exports = function (input, value) {
  var i
  if (typeof value === 'object') {
    value = JSON.stringify(value)
    for (i = 0; i < input.length; i++) if (typeof input[i] === 'object') input[i] = JSON.stringify(input[i])
  }
  if (typeof value === 'function') {
    value = '' + value
    for (i = 0; i < input.length; i++) if (typeof input[i] === 'function') input[i] = '' + input[i]
  }
  var output = -1
  for (i = 0; i < input.length; i++) if (input[i] === value) output = i
  return output
}
