const input = require('./input');

// not my solution
// const calibrate = (input) => {
//   const seen = {};
//   let frequency = 0;

//   while (true) {
//     for (const delta of input) {
//       frequency += Number(delta);
//       if (seen[frequency]) {
//         return frequency;
//       }
//       seen[frequency] = true;
//     }
//   }
// };

// my solution, very slow ;/
const calibrate = input => {
  const freqs = [];
  let currentFreq = 0;

  while (true) {
    for (const str of input) {
      currentFreq += +str;
      if (freqs.includes(currentFreq)) {
        return currentFreq;
      }
      freqs.push(currentFreq);
    }
  }
};

console.log(calibrate(input));
