// All permutations of characters in a string
perms = function*(str, depth=0) {
  //console.log(depth + ' ' + str);
  if (str.length===1) yield str;
  else {
    str = str.split('');
    for (var i=0; i<str.length; i++) {
      var sub = Array.from(str);
      sub.splice(i, 1); // Deletes element at i from sum
      var subperm = perms(sub.join(''), depth+1);
      while (true) {
        var ss = subperm.next();
        if (ss.done) break;
        //console.log(depth + ' ' + 'str[' + i + '] ' + str[i] + ' ' + ss.value);
        yield str[i] + ss.value;
      }
    }
  }
};

for (var p of perms('abcdef')) console.log(p)