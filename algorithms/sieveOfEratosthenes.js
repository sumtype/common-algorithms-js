/*
  A JavaScript module to perform the Sieve of Eratosthenes algorithm, which determines prime numbers up to the input integer.
*/

'use strict'

module.exports = exports = function (n) {
  if (n < 2) return []
  var numbers = new Array(), i = null, j = null
  for (i = 2; i <= n; i++) numbers.push(i)
  for (i = 2; i <= Math.sqrt(n); i++) if (numbers[i - 2]) for (j = Math.pow(i, 2) - 2; j < n; j += i) numbers[j] = false
  return numbers.filter(function(v) { return !!v })
}
