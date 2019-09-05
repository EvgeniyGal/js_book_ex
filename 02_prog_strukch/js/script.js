// Looping a triangle

let outPutStrimg = '';

console.groupCollapsed('Looping a triangle');
console.time('Looping a triangle');

for (let i = 0; i < 7; i++) {
  outPutStrimg += '#';
  console.log(outPutStrimg);
}

console.timeEnd('Looping a triangle');
console.groupEnd();

// FizzBuzz

console.groupCollapsed('FizzBuzz');

console.time('FizzBuzz');

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  }
  console.log(i);
}

console.timeEnd('FizzBuzz');

console.groupEnd();

// Chessboard

console.groupCollapsed('Chessboard');

console.time('Chessboard');

let chessBpard = '';

for (let i = 0; i < 20; i++) {
  let lineStr = '';

  if (i % 2 === 0) {
    for (let j = 0; j < 80; j++) {
      if (j % 2 === 0) {
        lineStr += '#';
      } else {
        lineStr += ' ';
      }
    }
  } else {
    for (let j = 0; j < 80; j++) {
      if (j % 2 === 0) {
        lineStr += ' ';
      } else {
        lineStr += '#';
      }
    }
  }

  chessBpard += `${lineStr}\n`;
}

console.log(chessBpard);

console.timeEnd('Chessboard');

console.groupEnd();
