function sum(numberArr) {
  let total = 0;
  numberArr.forEach((element) => {
    total += element;
  });
  return total;
}

function range(start, end, step = 1) {
  const numberArr = [];
  for (let i = start; i <= end; i += step) {
    numberArr.push(i);
  }
  return numberArr;
}

console.log('Task - The sum of a range: ', sum(range(1, 10, 1)));
