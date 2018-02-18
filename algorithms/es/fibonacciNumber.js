/*
  A JavaScript module which returns the nth Fibonacci number based on the input integer.  Uses Binet's formula.
*/

'use strict'

const fibonacciNumber = (n = 0) => n < 0 ? null : Math.floor(Math.pow((1 + Math.sqrt(5)) / 2, n) / Math.sqrt(5) + 0.5)

export default fibonacciNumber
