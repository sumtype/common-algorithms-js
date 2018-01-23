/*
  A JavaScript module which performs a brute force string match for a given string pattern inside an input string.  If the specified value is found, the index of the pattern string inside the input string is returned.  If the specified pattern is not found in the input string -1 is returned.
*/
module.exports = exports = function (input, pattern) {
  if (pattern.length > input.length) return -1
  for (var i = 0; i < input.length; i++) {
    var index = i
    for (var j = 0; j < pattern.length; j++) index = pattern[j] === input[index] ? index + 1 : null
    if (index - i === pattern.length) return i
  }
  return -1
}
