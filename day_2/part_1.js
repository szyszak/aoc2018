const input = require('./input');

const sortedStrings = input.map(str => str.split('').sort().join(''));

let dubs = 0;
let trips = 0;

// tried to use regex, but failed miserably

for (let str of sortedStrings) {
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] !== str[i] && str[i] === str[i + 1] && str[i + 1] !== str[i + 2]) {
      dubs++;
      break;
    }
  }
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] && str[i] === str[i + 2]) {
      trips++;
      break;
    }
  }
}

console.log(`dubs: ${dubs}, trips: ${trips}, checksum: ${dubs * trips}`);