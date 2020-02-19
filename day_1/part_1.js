const input = require('./input');

let result = 0;

for (const str of input) {
  result += parseInt(str);
}

console.log(result);
