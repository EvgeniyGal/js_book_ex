// Your code here.

function loop(range, test, update, print) {
  let localRange = range;
  while (test(localRange)) {
    print(localRange);
    localRange = update(localRange);
  }
}

loop(3, (n) => n > 0, (n) => n - 1, console.log);
// → 3
// → 2
// → 1
