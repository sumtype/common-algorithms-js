/*
  A JavaScript module which performs a binary search on an array of numbers ordered low to high.  If the specified value is found its index in the input array is returned.  If the specified value is not found -1 is returned.
*/
module.exports = exports = function (input, value) {
  var bottom, top, index
  bottom = 0
  top = input.length - 1
  index = null
  do {
    index = parseInt((bottom + top) / 2)
    if (value < input[index]) top = index - 1
    if (value > input[index]) bottom = index + 1
  } while (input[index] !== value && bottom <= top)
  if (value === input[index]) return index
  return -1
}
