//#!/usr/bin/env node
var i, j, prime, primes;


primes = [];


i = 2;


while (primes.length < 100) {
  prime = true;
  j = 2;
  while (j < i) {
    if (i % j === 0) {
      prime = false;
    }
    j++;
  }
  if (prime) {
    primes.push(i);
  }
  i++;
}


console.log(primes.toString());