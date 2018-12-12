const fs = require('fs');

// SIDEQUEST: wizaulizacja :O

// solution: total square inches of overlapping squares
// wymiary: 1000x1000? na to wyglada
// . = puste, # = zajete, X = overlapping

const parseInput = (file) => {
  const parsedInput = fs.readFileSync(file, 'utf8')
    .split('\r\n')
    .map(str => {
      const arr = str.split(' ');
      const pos = arr[2].split(',');
      const size = arr[3].split('x');
      const obj = {
        id: parseInt(arr[0].slice(1)),
        pos: {
          x: pos[0],
          y: pos[1]
        },
        size: {
          w: size[0],
          h: size[1]
        }
      }

      return obj;
    });
    
  return parsedInput;
}

const generateMatrix = (width, height, outputType) => {
  const matrix = [];

  for (let i = 0; i < height; i++) {
    matrix.push(Array.from({ length: width }, () => {
      return '.';
      })
    );
  }

  return outputType === 'string' ? matrix.map(arr => arr.join('')).join('\n') : matrix;
} 

console.log(generateMatrix(50, 50, 'string'));

// console.log(parseInput('./input.txt'));