/*
  A JavaScript module which performs a shell sort on a given array of numbers, ordering the elements from lowest to highest.
*/
module.exports = exports = function (input) {
  var gap = input.length
  do {
    for (var i = gap; i < input.length; i++) {
      var value, j
      value = input[i]
      j = i
      while (j >= gap && input[j - gap] > value) {
        input[j] = input[j - gap]
        j -= gap
      }
      input[j] = value
    }
    gap = parseInt(gap / 2)
  } while (gap > 0)
  return input
}
