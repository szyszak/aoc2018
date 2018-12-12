const input = require('./input');

// not my solution, i'm a fucking brainlet
// const calibrate = (input) => {
//   const seen = {};
//   let frequency = 0;

//   while (true) {
//       for (const delta of input) {
//           frequency += Number(delta);
//           if (seen[frequency]) {
//               return frequency;
//           }
//           seen[frequency] = true;
//       }
//   }
// };

// console.log(calibrate(input));

// my solution, slow as fuck
const calibrate = (input) => {
  const freqs = [];
  let currentFreq = 0;

  while (true) {
    for (let str of input) {
      currentFreq += parseInt(str);
      if (freqs.includes(currentFreq)) {
        return currentFreq;
      }
      freqs.push(currentFreq);
    }
  }
}

console.log(calibrate(input));