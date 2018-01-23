/*
  A JavaScript module which performs a bubble sort on a given array of numbers, ordering the elements from lowest to highest.
*/
module.exports = exports = function (input) {
  for (var i = 0; i < input.length; i++) {
    var index = i
    for (var j = i + 1; j < input.length; j++) if (input[index] > input[j]) index = j
    if (index !== i) {
      var swap = input[i]
      input[i] = input[index]
      input[index] = swap
    }
  }
  return input
}
