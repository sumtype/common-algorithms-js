# Common Algorithms in JavaScript

[![Build Status](https://travis-ci.org/sumtype/common-algorithms-js.svg?branch=master)](https://travis-ci.org/sumtype/common-algorithms-js) [![Coverage Status](https://coveralls.io/repos/github/sumtype/common-algorithms-js/badge.svg?branch=master)](https://coveralls.io/github/sumtype/common-algorithms-js?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/sumtype/common-algorithms-js/badge.svg)](https://snyk.io/test/github/sumtype/common-algorithms-js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Common algorithms implemented in JavaScript with [Mocha](https://mochajs.org/)/[Chai](http://chaijs.com/) testing.

### Array

* [Binary Search](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/binarySearch.js)
* [Bubble Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/bubbleSort.js)
* [Bucket Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/bucketSort.js)
* [Cocktail Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/cocktailSort.js)
* [Counting Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/countingSort.js)
* [Durstenfeld Shuffle (a.k.a. Knuth Shuffle)](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/durstenfeldShuffle.js)
* [Gnome Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/gnomeSort.js)
* [Insertion Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/insertionSort.js)
* [Linear Search](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/linearSearch.js)
* [Merge Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/mergeSort.js)
* [Quick Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/quickSort.js)
* [Radix Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/radixSort.js)
* [Sattolo Cycle](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/sattoloCycle.js)
* [Selection Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/selectionSort.js)
* [Shell Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/shellSort.js)
* [Sleep Sort](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/sleepSort.js)

### Geometry

* [Bezier Curve](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/bezierCurve.js)
* [Ray-Casting](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/rayCasting.js)

### Graph

* [Breadth First Search](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/breadthFirstSearch.js)
* [Depth First Search](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/depthFirstSearch.js)

### Math

* [Fibonacci Number](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/fibonacciNumber.js)
* [Is Prime](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/isPrime.js)
* [Power Set](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/powerSet.js)
* [Prime Factors](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/primeFactors.js)
* [Sieve of Eratosthenes](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/sieveOfEratosthenes.js)

### String

* [Boyer-Moore String Match](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/boyerMooreStringMatch.js)
* [Boyer-Moore-Horspool String Match](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/boyerMooreHorspoolStringMatch.js)
* [Brute Force String Match](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/bruteForceStringMatch.js)
* [Damerau-Levenshtein Distance](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/damerauLevenshteinDistance.js)
* [Hamming Distance](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/hammingDistance.js)
* [Knuth-Morris-Pratt String Match](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/knuthMorrisPrattStringMatch.js)
* [Levenshtein Distance](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/levenshteinDistance.js)
* [Longest Common Subsequence](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/longestCommonSubsequence.js)
* [Longest Common Substring](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/longestCommonSubstring.js)
* [Matching Delimiters](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/matchingDelimiters.js)
* [Rabin-Karp String Match](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/rabinKarpStringMatch.js)
* [Sørensen-Dice Coefficient](https://github.com/sumtype/common-algorithms-js/blob/master/algorithms/sorensenDiceCoefficient.js)

## Testing

To run the tests yourself you'll need to download the project and install its node module dependencies via [npm](https://www.npmjs.com/).  So, if you haven't already installed [Node.js](https://nodejs.org/) and npm for use on your command line hop over to the Node.js website and follow their download and installation instructions.  Once you have Node.js and npm installed, clone the project onto your computer using the following command in your terminal/command prompt/console:

`git clone https://github.com/sumtype/common-algorithms-js.git`

(Just in case you haven't already installed [Git](https://git-scm.com/), do so by following the installation instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), then enter the previous command again once it's installed.)  Once you've downloaded the project use the following command to navigate to the project's root directory:

`cd common-algorithms-js`

Next, install the project's node module dependencies from npm.  Do so by entering this command:

`npm install`

Once all the dependencies are installed you'll be ready to run the tests.  Enter the following command to run them:

`npm run local-test`

This repository uses [Travis-CI](https://travis-ci.org/sumtype/common-algorithms-js) for deployment testing on Node.js versions 8.9.x and 9.4.x.
