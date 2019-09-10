const buildArray = [];

function arrayToList(array) {
  if (array.length === 0) {
    return null;
  }
  return {
    value: array.shift(),
    rest: arrayToList(array),
  };
}

function listToArray(list) {
  if (list.rest === null) {
    buildArray.push(list.value);
    return buildArray;
  }
  buildArray.push(list.value);
  return listToArray(list.rest);
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }));
