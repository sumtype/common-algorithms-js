/*
  A JavaScript module to perform the Sieve of Eratosthenes algorithm, which determines prime numbers up to the input integer.
*/

'use strict'

const sieveOfEratosthenes = (n = 0) => {
  let numbers = []
  if (n < 2) return numbers
  for (let i = 2; i <= n; i++) numbers.push(i)
  for (let i = 2; i <= Math.sqrt(n); i++) if (numbers[i - 2]) for (let j = Math.pow(i, 2) - 2; j < n; j += i) numbers[j] = false
  return numbers.filter(v => !!v)
}

export default sieveOfEratosthenes
