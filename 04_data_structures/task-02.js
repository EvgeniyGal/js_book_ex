function range(start, end, step = 1) {
  const numberArr = [];
  for (let i = start; i <= end; i += step) {
    numberArr.push(i);
  }
  return numberArr;
}

function reversArray(arr) {
  const tempArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    tempArr.push(arr[i]);
  }
  return tempArr;
}

function reverseArrayInPlace(arr) {
  const maxIdex = arr.length - 1;
  const tempArr = arr;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const tempItem = arr[i];
    tempArr[i] = arr[maxIdex - i];
    tempArr[maxIdex - i] = tempItem;
  }
  return arr;
}

console.log('Task - Reversing array: ', range(1, 10, 1));
console.log('Task - Reversing array: ', reversArray(range(0, 10, 2)));
console.log('Task - Reversing array: ', reverseArrayInPlace(range(0, 20, 5)));
