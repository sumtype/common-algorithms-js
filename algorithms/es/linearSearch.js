/*
  A JavaScript module which performs a linear search for a given value inside an input array.  If the specified value is found, the index of the element in the array with that value is returned.  If the specified value is not found in the array null is returned.
*/

'use strict'

const linearSearch = (array, value) => {
  let output = null
  if (typeof value === 'object') {
    value = JSON.stringify(value)
    for (let i = 0; i < array.length; i++) if (typeof array[i] === 'object') array[i] = JSON.stringify(array[i])
  }
  if (typeof value === 'function') {
    value = '' + value
    for (let i = 0; i < array.length; i++) if (typeof array[i] === 'function') array[i] = '' + array[i]
  }
  for (let i = 0; i < array.length; i++) if (array[i] === value) output = i
  return output
}

export default linearSearch
