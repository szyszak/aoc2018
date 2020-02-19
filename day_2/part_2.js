const input = require('./input');

const findBoxes = (input) => {
  while (input.length > 1) {
    const firstStr = input.shift();
    let currStr = '';
    let differentChars = 0;

    for (const str of input) {
      currStr = str;

      for (let i = 0; i < firstStr.length; i++) {
        if (firstStr[i] !== currStr[i]) {
          differentChars++;
        }
      }

      if (differentChars === 1) {
        return [firstStr, currStr];
      }
      differentChars = 0;
    }
  }
};

const findChars = (arr) => {
  let chars = '';
  const [firstStr, secondStr] = arr;

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === secondStr[i]) chars += firstStr[i];
  }

  return chars;
};

console.log(findChars(findBoxes(input)));
