(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', './algorithms/es5/binarySearch', './algorithms/es5/bubbleSort', './algorithms/es5/bucketSort', './algorithms/es5/cocktailSort', './algorithms/es5/countingSort', './algorithms/es5/durstenfeldShuffle', './algorithms/es5/gnomeSort', './algorithms/es5/insertionSort', './algorithms/es5/linearSearch', './algorithms/es5/mergeSort', './algorithms/es5/quickSort', './algorithms/es5/radixSort', './algorithms/es5/reservoirSampling', './algorithms/es5/sattoloCycle', './algorithms/es5/selectionSort', './algorithms/es5/shellSort', './algorithms/es5/sleepSort', './algorithms/es5/bezierCurve', './algorithms/es5/rayCasting', './algorithms/es5/breadthFirstSearch', './algorithms/es5/depthFirstSearch', './algorithms/es5/fibonacciNumber', './algorithms/es5/isPrime', './algorithms/es5/powerSet', './algorithms/es5/primeFactors', './algorithms/es5/sieveOfAtkin', './algorithms/es5/sieveOfEratosthenes', './algorithms/es5/areAnagrams', './algorithms/es5/arePalindromes', './algorithms/es5/boyerMooreStringMatch', './algorithms/es5/boyerMooreHorspoolStringMatch', './algorithms/es5/bruteForceStringMatch', './algorithms/es5/damerauLevenshteinDistance', './algorithms/es5/hammingDistance', './algorithms/es5/hasDuplicateCharacters', './algorithms/es5/knuthMorrisPrattStringMatch', './algorithms/es5/levenshteinDistance', './algorithms/es5/longestCommonSubsequence', './algorithms/es5/longestCommonSubstring', './algorithms/es5/matchingDelimiters', './algorithms/es5/rabinKarpStringMatch', './algorithms/es5/sorensenDiceCoefficient'], factory)
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('./algorithms/es5/binarySearch'), require('./algorithms/es5/bubbleSort'), require('./algorithms/es5/bucketSort'), require('./algorithms/es5/cocktailSort'), require('./algorithms/es5/countingSort'), require('./algorithms/es5/durstenfeldShuffle'), require('./algorithms/es5/gnomeSort'), require('./algorithms/es5/insertionSort'), require('./algorithms/es5/linearSearch'), require('./algorithms/es5/mergeSort'), require('./algorithms/es5/quickSort'), require('./algorithms/es5/radixSort'), require('./algorithms/es5/reservoirSampling'), require('./algorithms/es5/sattoloCycle'), require('./algorithms/es5/selectionSort'), require('./algorithms/es5/shellSort'), require('./algorithms/es5/sleepSort'), require('./algorithms/es5/bezierCurve'), require('./algorithms/es5/rayCasting'), require('./algorithms/es5/breadthFirstSearch'), require('./algorithms/es5/depthFirstSearch'), require('./algorithms/es5/fibonacciNumber'), require('./algorithms/es5/isPrime'), require('./algorithms/es5/powerSet'), require('./algorithms/es5/primeFactors'), require('./algorithms/es5/sieveOfAtkin'), require('./algorithms/es5/sieveOfEratosthenes'), require('./algorithms/es5/areAnagrams'), require('./algorithms/es5/arePalindromes'), require('./algorithms/es5/boyerMooreStringMatch'), require('./algorithms/es5/boyerMooreHorspoolStringMatch'), require('./algorithms/es5/bruteForceStringMatch'), require('./algorithms/es5/damerauLevenshteinDistance'), require('./algorithms/es5/hammingDistance'), require('./algorithms/es5/hasDuplicateCharacters'), require('./algorithms/es5/knuthMorrisPrattStringMatch'), require('./algorithms/es5/levenshteinDistance'), require('./algorithms/es5/longestCommonSubsequence'), require('./algorithms/es5/longestCommonSubstring'), require('./algorithms/es5/matchingDelimiters'), require('./algorithms/es5/rabinKarpStringMatch'), require('./algorithms/es5/sorensenDiceCoefficient'))
  } else {
    var mod = {
      exports: {}
    }
    factory(mod.exports, global.binarySearch, global.bubbleSort, global.bucketSort, global.cocktailSort, global.countingSort, global.durstenfeldShuffle, global.gnomeSort, global.insertionSort, global.linearSearch, global.mergeSort, global.quickSort, global.radixSort, global.reservoirSampling, global.sattoloCycle, global.selectionSort, global.shellSort, global.sleepSort, global.bezierCurve, global.rayCasting, global.breadthFirstSearch, global.depthFirstSearch, global.fibonacciNumber, global.isPrime, global.powerSet, global.primeFactors, global.sieveOfAtkin, global.sieveOfEratosthenes, global.areAnagrams, global.arePalindromes, global.boyerMooreStringMatch, global.boyerMooreHorspoolStringMatch, global.bruteForceStringMatch, global.damerauLevenshteinDistance, global.hammingDistance, global.hasDuplicateCharacters, global.knuthMorrisPrattStringMatch, global.levenshteinDistance, global.longestCommonSubsequence, global.longestCommonSubstring, global.matchingDelimiters, global.rabinKarpStringMatch, global.sorensenDiceCoefficient)
    global.algorithms = mod.exports
  }
})(this, function (exports, _binarySearch, _bubbleSort, _bucketSort, _cocktailSort, _countingSort, _durstenfeldShuffle, _gnomeSort, _insertionSort, _linearSearch, _mergeSort, _quickSort, _radixSort, _reservoirSampling, _sattoloCycle, _selectionSort, _shellSort, _sleepSort, _bezierCurve, _rayCasting, _breadthFirstSearch, _depthFirstSearch, _fibonacciNumber, _isPrime, _powerSet, _primeFactors, _sieveOfAtkin, _sieveOfEratosthenes, _areAnagrams, _arePalindromes, _boyerMooreStringMatch, _boyerMooreHorspoolStringMatch, _bruteForceStringMatch, _damerauLevenshteinDistance, _hammingDistance, _hasDuplicateCharacters, _knuthMorrisPrattStringMatch, _levenshteinDistance, _longestCommonSubsequence, _longestCommonSubstring, _matchingDelimiters, _rabinKarpStringMatch, _sorensenDiceCoefficient) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  exports.sorensenDiceCoefficient = exports.rabinKarpStringMatch = exports.matchingDelimiters = exports.longestCommonSubstring = exports.longestCommonSubsequence = exports.levenshteinDistance = exports.knuthMorrisPrattStringMatch = exports.hasDuplicateCharacters = exports.hammingDistance = exports.damerauLevenshteinDistance = exports.bruteForceStringMatch = exports.boyerMooreHorspoolStringMatch = exports.boyerMooreStringMatch = exports.arePalindromes = exports.areAnagrams = exports.string = exports.sieveOfEratosthenes = exports.sieveOfAtkin = exports.primeFactors = exports.powerSet = exports.isPrime = exports.fibonacciNumber = exports.math = exports.depthFirstSearch = exports.breadthFirstSearch = exports.graph = exports.rayCasting = exports.bezierCurve = exports.geometry = exports.sleepSort = exports.shellSort = exports.selectionSort = exports.sattoloCycle = exports.reservoirSampling = exports.radixSort = exports.quickSort = exports.mergeSort = exports.linearSearch = exports.insertionSort = exports.gnomeSort = exports.durstenfeldShuffle = exports.countingSort = exports.cocktailSort = exports.bucketSort = exports.bubbleSort = exports.binarySearch = exports.array = undefined

  var _binarySearch2 = _interopRequireDefault(_binarySearch)

  var _bubbleSort2 = _interopRequireDefault(_bubbleSort)

  var _bucketSort2 = _interopRequireDefault(_bucketSort)

  var _cocktailSort2 = _interopRequireDefault(_cocktailSort)

  var _countingSort2 = _interopRequireDefault(_countingSort)

  var _durstenfeldShuffle2 = _interopRequireDefault(_durstenfeldShuffle)

  var _gnomeSort2 = _interopRequireDefault(_gnomeSort)

  var _insertionSort2 = _interopRequireDefault(_insertionSort)

  var _linearSearch2 = _interopRequireDefault(_linearSearch)

  var _mergeSort2 = _interopRequireDefault(_mergeSort)

  var _quickSort2 = _interopRequireDefault(_quickSort)

  var _radixSort2 = _interopRequireDefault(_radixSort)

  var _reservoirSampling2 = _interopRequireDefault(_reservoirSampling)

  var _sattoloCycle2 = _interopRequireDefault(_sattoloCycle)

  var _selectionSort2 = _interopRequireDefault(_selectionSort)

  var _shellSort2 = _interopRequireDefault(_shellSort)

  var _sleepSort2 = _interopRequireDefault(_sleepSort)

  var _bezierCurve2 = _interopRequireDefault(_bezierCurve)

  var _rayCasting2 = _interopRequireDefault(_rayCasting)

  var _breadthFirstSearch2 = _interopRequireDefault(_breadthFirstSearch)

  var _depthFirstSearch2 = _interopRequireDefault(_depthFirstSearch)

  var _fibonacciNumber2 = _interopRequireDefault(_fibonacciNumber)

  var _isPrime2 = _interopRequireDefault(_isPrime)

  var _powerSet2 = _interopRequireDefault(_powerSet)

  var _primeFactors2 = _interopRequireDefault(_primeFactors)

  var _sieveOfAtkin2 = _interopRequireDefault(_sieveOfAtkin)

  var _sieveOfEratosthenes2 = _interopRequireDefault(_sieveOfEratosthenes)

  var _areAnagrams2 = _interopRequireDefault(_areAnagrams)

  var _arePalindromes2 = _interopRequireDefault(_arePalindromes)

  var _boyerMooreStringMatch2 = _interopRequireDefault(_boyerMooreStringMatch)

  var _boyerMooreHorspoolStringMatch2 = _interopRequireDefault(_boyerMooreHorspoolStringMatch)

  var _bruteForceStringMatch2 = _interopRequireDefault(_bruteForceStringMatch)

  var _damerauLevenshteinDistance2 = _interopRequireDefault(_damerauLevenshteinDistance)

  var _hammingDistance2 = _interopRequireDefault(_hammingDistance)

  var _hasDuplicateCharacters2 = _interopRequireDefault(_hasDuplicateCharacters)

  var _knuthMorrisPrattStringMatch2 = _interopRequireDefault(_knuthMorrisPrattStringMatch)

  var _levenshteinDistance2 = _interopRequireDefault(_levenshteinDistance)

  var _longestCommonSubsequence2 = _interopRequireDefault(_longestCommonSubsequence)

  var _longestCommonSubstring2 = _interopRequireDefault(_longestCommonSubstring)

  var _matchingDelimiters2 = _interopRequireDefault(_matchingDelimiters)

  var _rabinKarpStringMatch2 = _interopRequireDefault(_rabinKarpStringMatch)

  var _sorensenDiceCoefficient2 = _interopRequireDefault(_sorensenDiceCoefficient)

  function _interopRequireDefault (obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    }
  }

  var array = { binarySearch: _binarySearch2.default, bubbleSort: _bubbleSort2.default, bucketSort: _bucketSort2.default, cocktailSort: _cocktailSort2.default, countingSort: _countingSort2.default, durstenfeldShuffle: _durstenfeldShuffle2.default, gnomeSort: _gnomeSort2.default, insertionSort: _insertionSort2.default, linearSearch: _linearSearch2.default, mergeSort: _mergeSort2.default, quickSort: _quickSort2.default, radixSort: _radixSort2.default, reservoirSampling: _reservoirSampling2.default, sattoloCycle: _sattoloCycle2.default, selectionSort: _selectionSort2.default, shellSort: _shellSort2.default, sleepSort: _sleepSort2.default }
  var geometry = { bezierCurve: _bezierCurve2.default, rayCasting: _rayCasting2.default }
  var graph = { breadthFirstSearch: _breadthFirstSearch2.default, depthFirstSearch: _depthFirstSearch2.default }
  var math = { fibonacciNumber: _fibonacciNumber2.default, isPrime: _isPrime2.default, powerSet: _powerSet2.default, primeFactors: _primeFactors2.default, sieveOfAtkin: _sieveOfAtkin2.default, sieveOfEratosthenes: _sieveOfEratosthenes2.default }
  var string = { areAnagrams: _areAnagrams2.default, arePalindromes: _arePalindromes2.default, boyerMooreStringMatch: _boyerMooreStringMatch2.default, boyerMooreHorspoolStringMatch: _boyerMooreHorspoolStringMatch2.default, bruteForceStringMatch: _bruteForceStringMatch2.default, damerauLevenshteinDistance: _damerauLevenshteinDistance2.default, hammingDistance: _hammingDistance2.default, hasDuplicateCharacters: _hasDuplicateCharacters2.default, knuthMorrisPrattStringMatch: _knuthMorrisPrattStringMatch2.default, levenshteinDistance: _levenshteinDistance2.default, longestCommonSubsequence: _longestCommonSubsequence2.default, longestCommonSubstring: _longestCommonSubstring2.default, matchingDelimiters: _matchingDelimiters2.default, rabinKarpStringMatch: _rabinKarpStringMatch2.default, sorensenDiceCoefficient: _sorensenDiceCoefficient2.default }

  exports.default = { array: array, geometry: geometry, graph: graph, math: math, string: string }
  exports.array = array
  exports.binarySearch = _binarySearch2.default
  exports.bubbleSort = _bubbleSort2.default
  exports.bucketSort = _bucketSort2.default
  exports.cocktailSort = _cocktailSort2.default
  exports.countingSort = _countingSort2.default
  exports.durstenfeldShuffle = _durstenfeldShuffle2.default
  exports.gnomeSort = _gnomeSort2.default
  exports.insertionSort = _insertionSort2.default
  exports.linearSearch = _linearSearch2.default
  exports.mergeSort = _mergeSort2.default
  exports.quickSort = _quickSort2.default
  exports.radixSort = _radixSort2.default
  exports.reservoirSampling = _reservoirSampling2.default
  exports.sattoloCycle = _sattoloCycle2.default
  exports.selectionSort = _selectionSort2.default
  exports.shellSort = _shellSort2.default
  exports.sleepSort = _sleepSort2.default
  exports.geometry = geometry
  exports.bezierCurve = _bezierCurve2.default
  exports.rayCasting = _rayCasting2.default
  exports.graph = graph
  exports.breadthFirstSearch = _breadthFirstSearch2.default
  exports.depthFirstSearch = _depthFirstSearch2.default
  exports.math = math
  exports.fibonacciNumber = _fibonacciNumber2.default
  exports.isPrime = _isPrime2.default
  exports.powerSet = _powerSet2.default
  exports.primeFactors = _primeFactors2.default
  exports.sieveOfAtkin = _sieveOfAtkin2.default
  exports.sieveOfEratosthenes = _sieveOfEratosthenes2.default
  exports.string = string
  exports.areAnagrams = _areAnagrams2.default
  exports.arePalindromes = _arePalindromes2.default
  exports.boyerMooreStringMatch = _boyerMooreStringMatch2.default
  exports.boyerMooreHorspoolStringMatch = _boyerMooreHorspoolStringMatch2.default
  exports.bruteForceStringMatch = _bruteForceStringMatch2.default
  exports.damerauLevenshteinDistance = _damerauLevenshteinDistance2.default
  exports.hammingDistance = _hammingDistance2.default
  exports.hasDuplicateCharacters = _hasDuplicateCharacters2.default
  exports.knuthMorrisPrattStringMatch = _knuthMorrisPrattStringMatch2.default
  exports.levenshteinDistance = _levenshteinDistance2.default
  exports.longestCommonSubsequence = _longestCommonSubsequence2.default
  exports.longestCommonSubstring = _longestCommonSubstring2.default
  exports.matchingDelimiters = _matchingDelimiters2.default
  exports.rabinKarpStringMatch = _rabinKarpStringMatch2.default
  exports.sorensenDiceCoefficient = _sorensenDiceCoefficient2.default
})
