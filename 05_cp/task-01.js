const arrays = [[1, 2, 3], [4, 5], [6]];

function flattArr(arr) {
  return arr.reduce((a, b) => a.concat(b));
}

console.log(flattArr(arrays));

// Your code here.
// → [1, 2, 3, 4, 5, 6]
