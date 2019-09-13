function deepCompare(obj1, obj2) {
  if (typeof obj1 === typeof obj2 && typeof obj2 === 'number') {
    return obj1 === obj2;
  }
  if (typeof obj1 === typeof obj2 && typeof obj2 === 'string') {
    if (obj1.length === obj2.length) {
      return obj1.includes(obj2);
    }
    return false;
  }
  if (typeof obj1 === typeof obj2 && typeof obj2 === 'boolean') {
    return obj2 === obj1;
  }
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    const arrObj1 = obj1.join('');
    const arrObj2 = obj2.join('');
    if (arrObj1.length === arrObj2.length) {
      return arrObj1.includes(arrObj2);
    }
    return false;
  }
  if (obj1 === null && obj2 === null) {
    return true;
  }
  if (
    typeof obj1 === typeof obj2
    && typeof obj2 === 'object'
    && obj1 !== null
    && obj2 !== null
  ) {
    const arrObj1 = Object.entries(obj1);
    const arrObj2 = Object.entries(obj2);
    const strObj1 = arrObj1.join('');
    const strObj2 = arrObj2.join('');
    if (strObj1.length === strObj2.length) {
      return strObj1.includes(strObj2);
    }
    return false;
  }
  return false;
}

console.log('number', deepCompare(5, 9));
console.log('number', deepCompare(9, '9'));
console.log('number', deepCompare(9, 9));
console.log('string', deepCompare('', '2'));
console.log('string', deepCompare('', 0));
console.log('string', deepCompare('25', '2'));
console.log('string', deepCompare('23', '23'));
console.log('boolean', deepCompare(false, true));
console.log('boolean', deepCompare(false, false));
console.log('array', deepCompare([2, 6], []));
console.log('array', deepCompare([2, 6], [6, 9]));
console.log('array', deepCompare([2, 6], '2, 6'));
console.log('array', deepCompare([2, 6], null));
console.log('array', deepCompare([2, 6], [2, 6]));
console.log(
  'object',
  deepCompare({ name: 'Hh', id: 5 }, { name: 'HH', id: 5 }),
);
console.log('object', deepCompare({ name: 'HH', id: 6 }, ['HH', 6]));
console.log(
  'object',
  deepCompare({ name: 'HH', id: 6 }, { name: 'HH', id: 5 }),
);
console.log(
  'object',
  deepCompare({ name: 'HH', id: 5 }, { name: 'HH', id: 5 }),
);
