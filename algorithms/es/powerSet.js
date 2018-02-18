/*
  A JavaScript module which returns the power set of an input array.
*/

'use strict'

const powerSet = (array = null) => {
  if (array === null) return null
  let powerSet = [[]]
  for (let i = 0; i < array.length; i++) for (let j = 0, length = powerSet.length; j < length; j++) powerSet.push(powerSet[j].concat(array[i]))
  return powerSet
}

export default powerSet
