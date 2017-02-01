function primes(num) {
  // Primes <= num using Sieve of Erastothenes
  var arr = []; // The sieve
  for (var i=0; i<=num; i++) arr.push(true);
  
  // De-populate the sieve
  for (var k=2; k<=num; k++) {
    if (arr[k]) {
      var n = k*2;
      while (n <= num) {
        arr[n] = false;
        n += k;
      }
    }
  }
  
  // Find what is left
  var result = [];
  for (k=2; k<=num; k++)
    if (arr[k])
      result.push(k);
  return result;
}

// Fibonacci numbers <= num
function fibsLessThan(num) {
  var fibs = [1, 1];
  var last=1, next = 2;
  while(next <= num) {
    fibs.push(next);
    var temp = next;
    next = next + last;
    last = temp;
  }
  return fibs;
}

// Factory for iterables that produce permutations // doesn't quite work...
perms = function*(str, depth) {
  console.log(depth + ' ' + str)
  if (str.length===1) return str;
  str = str.split('');
  for (var i=0; i<str.length; i++) {
    sub = Array.from(str);
    sub.splice(i, 1); // Deletes element at i from sum
    for (var subperm of perms(sub.join(''), depth+1)) {
      console.log(subperm);
      yield sub[i] + subperm;
    }
  }
}


for (var s of perms('abc', 0)) console.log(s)