(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory)
  } else if (typeof exports !== 'undefined') {
    factory(exports)
  } else {
    var mod = {
      exports: {}
    }
    factory(mod.exports)
    global.sieveOfAtkin = mod.exports
  }
})(this, function (exports) {
  'use strict'

  Object.defineProperty(exports, '__esModule', {
    value: true
  })
  var sieveOfAtkin = function sieveOfAtkin () {
    var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0

    var primes = [2, 3]
    var sieve = new Array(limit)
    for (var x = 1, xSquared = x * x; xSquared < limit; x++) {
      xSquared = x * x
      for (var y = 1, ySquared = y * y; ySquared < limit; y++) {
        ySquared = y * y
        var n = 4 * xSquared + ySquared
        if (n <= limit) {
          var mod12Check = n % 12
          if (mod12Check === 1 || mod12Check === 5) sieve[n] = !sieve[n]
        }
        var threeXSquared = 3 * xSquared
        n = threeXSquared + ySquared
        if (n <= limit && n % 12 === 7) sieve[n] = !sieve[n]
        n = threeXSquared - ySquared
        if (x > y && n <= limit && n % 12 === 11) sieve[n] = !sieve[n]
      }
    }
    for (var r = 5; r * r < limit; r++) {
      if (sieve[r]) {
        for (var i = r * r; i < limit; i += r * r) {
          sieve[i] = false
        }
      }
    } for (var a = 5; a < limit; a++) {
      if (sieve[a]) primes.push(a)
    } return limit < 2 ? [] : limit === 2 ? [2] : limit === 3 ? [2, 3] : primes
  }

  exports.default = sieveOfAtkin
})
