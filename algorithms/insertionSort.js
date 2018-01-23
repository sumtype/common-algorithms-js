/*
  A JavaScript module which performs an insertion sort on a given array of numbers, ordering the elements from lowest to highest.
*/
module.exports = exports = function (input) {
  for (var i = 0; i < input.length; i++) {
    var index = i
    while (index > 0 && input[index] < input[index - 1]) {
      var swap = input[index]
      input[index] = input[index - 1]
      input[index - 1] = swap
      index -= 1
    }
  }
  return input
}
