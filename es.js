/*
  A JavaScript module which includes several common algorithms.
*/

'use strict'

// Array Algorithms
import binarySearch from './algorithms/es/binarySearch'
import bubbleSort from './algorithms/es/bubbleSort'
import bucketSort from './algorithms/es/bucketSort'
import cocktailSort from './algorithms/es/cocktailSort'
import countingSort from './algorithms/es/countingSort'
import durstenfeldShuffle from './algorithms/es/durstenfeldShuffle'
import gnomeSort from './algorithms/es/gnomeSort'
import insertionSort from './algorithms/es/insertionSort'
import linearSearch from './algorithms/es/linearSearch'
import mergeSort from './algorithms/es/mergeSort'
import quickSort from './algorithms/es/quickSort'
import radixSort from './algorithms/es/radixSort'
import reservoirSampling from './algorithms/es/reservoirSampling'
import sattoloCycle from './algorithms/es/sattoloCycle'
import selectionSort from './algorithms/es/selectionSort'
import shellSort from './algorithms/es/shellSort'
import sleepSort from './algorithms/es/sleepSort'

// Geometry Algorithms
import bezierCurve from './algorithms/es/bezierCurve'
import rayCasting from './algorithms/es/rayCasting'

// Graph Algorithms
import breadthFirstSearch from './algorithms/es/breadthFirstSearch'
import depthFirstSearch from './algorithms/es/depthFirstSearch'
import kahnTopologicalSort from './algorithms/es/kahnTopologicalSort'
// Math Algorithms
import fibonacciNumber from './algorithms/es/fibonacciNumber'
import isPrime from './algorithms/es/isPrime'
import powerSet from './algorithms/es/powerSet'
import primeFactors from './algorithms/es/primeFactors'
import sieveOfAtkin from './algorithms/es/sieveOfAtkin'
import sieveOfEratosthenes from './algorithms/es/sieveOfEratosthenes'

// String Algorithms
import areAnagrams from './algorithms/es/areAnagrams'
import arePalindromes from './algorithms/es/arePalindromes'
import boyerMooreStringMatch from './algorithms/es/boyerMooreStringMatch'
import boyerMooreHorspoolStringMatch from './algorithms/es/boyerMooreHorspoolStringMatch'
import bruteForceStringMatch from './algorithms/es/bruteForceStringMatch'
import damerauLevenshteinDistance from './algorithms/es/damerauLevenshteinDistance'
import hammingDistance from './algorithms/es/hammingDistance'
import hasDuplicateCharacters from './algorithms/es/hasDuplicateCharacters'
import knuthMorrisPrattStringMatch from './algorithms/es/knuthMorrisPrattStringMatch'
import levenshteinDistance from './algorithms/es/levenshteinDistance'
import longestCommonSubsequence from './algorithms/es/longestCommonSubsequence'
import longestCommonSubstring from './algorithms/es/longestCommonSubstring'
import matchingDelimiters from './algorithms/es/matchingDelimiters'
import rabinKarpStringMatch from './algorithms/es/rabinKarpStringMatch'
import sorensenDiceCoefficient from './algorithms/es/sorensenDiceCoefficient'

// Algorithm Categories
const array = { binarySearch, bubbleSort, bucketSort, cocktailSort, countingSort, durstenfeldShuffle, gnomeSort, insertionSort, linearSearch, mergeSort, quickSort, radixSort, reservoirSampling, sattoloCycle, selectionSort, shellSort, sleepSort }
const geometry = { bezierCurve, rayCasting }
const graph = { breadthFirstSearch, depthFirstSearch, kahnTopologicalSort }
const math = { fibonacciNumber, isPrime, powerSet, primeFactors, sieveOfAtkin, sieveOfEratosthenes }
const string = { areAnagrams, arePalindromes, boyerMooreStringMatch, boyerMooreHorspoolStringMatch, bruteForceStringMatch, damerauLevenshteinDistance, hammingDistance, hasDuplicateCharacters, knuthMorrisPrattStringMatch, levenshteinDistance, longestCommonSubsequence, longestCommonSubstring, matchingDelimiters, rabinKarpStringMatch, sorensenDiceCoefficient }

// Algorithm Exports
export default { array, geometry, graph, math, string }
export {
  array, binarySearch, bubbleSort, bucketSort, cocktailSort, countingSort, durstenfeldShuffle, gnomeSort, insertionSort, linearSearch, mergeSort, quickSort, radixSort, reservoirSampling, sattoloCycle, selectionSort, shellSort, sleepSort,
  geometry, bezierCurve, rayCasting,
  graph, breadthFirstSearch, depthFirstSearch, kahnTopologicalSort,
  math, fibonacciNumber, isPrime, powerSet, primeFactors, sieveOfAtkin, sieveOfEratosthenes,
  string, areAnagrams, arePalindromes, boyerMooreStringMatch, boyerMooreHorspoolStringMatch, bruteForceStringMatch, damerauLevenshteinDistance, hammingDistance, hasDuplicateCharacters, knuthMorrisPrattStringMatch, levenshteinDistance, longestCommonSubsequence, longestCommonSubstring, matchingDelimiters, rabinKarpStringMatch, sorensenDiceCoefficient
}
