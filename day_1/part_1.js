const input = require('./input');

let result = 0;

for (let str of input) {
  result += parseInt(str);
}

console.log(result);