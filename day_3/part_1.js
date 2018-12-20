const fs = require("fs");
const start = new Date().getTime();

// SIDEQUEST: wizaulizacja :O

// TODO: cleanup
// . = niezajete, # = zajete, X = overlapping
// dodac pare stalych, jak ARR_LENGTH dla lepszej wydajnosci?

const parseInput = file => {
  const parsedInput = fs
    .readFileSync(file, "utf8")
    .split("\r\n")
    .map(str => {
      const arr = str.split(" ");
      const pos = arr[2].split(",");
      const size = arr[3].split("x");
      const obj = {
        id: parseInt(arr[0].slice(1)),
        pos: {
          x: parseInt(pos[0]),
          y: parseInt(pos[1])
        },
        size: {
          w: parseInt(size[0]),
          h: parseInt(size[1])
        }
      };

      return obj;
    });

  return parsedInput;
};

const input = parseInput("./input.txt");

const fakeInput = [
  { id: 1, pos: { x: 55, y: 885 }, size: { w: 22, h: 10 } },
  { id: 2, pos: { x: 102, y: 14 }, size: { w: 23, h: 14 } },
  { id: 3, pos: { x: 539, y: 327 }, size: { w: 21, h: 22 } },
  { id: 4, pos: { x: 429, y: 353 }, size: { w: 14, h: 25 } },
  { id: 5, pos: { x: 232, y: 934 }, size: { w: 29, h: 11 } },
  { id: 6, pos: { x: 796, y: 785 }, size: { w: 17, h: 18 } },
  { id: 7, pos: { x: 508, y: 96 }, size: { w: 11, h: 18 } },
  { id: 8, pos: { x: 83, y: 289 }, size: { w: 28, h: 23 } },
  { id: 9, pos: { x: 291, y: 46 }, size: { w: 21, h: 17 } },
  { id: 10, pos: { x: 505, y: 954 }, size: { w: 23, h: 15 } },
  { id: 11, pos: { x: 934, y: 606 }, size: { w: 17, h: 25 } },
  { id: 12, pos: { x: 125, y: 764 }, size: { w: 19, h: 16 } },
  { id: 13, pos: { x: 699, y: 475 }, size: { w: 25, h: 23 } },
  { id: 14, pos: { x: 517, y: 816 }, size: { w: 13, h: 12 } },
  { id: 15, pos: { x: 983, y: 477 }, size: { w: 16, h: 12 } },
  { id: 16, pos: { x: 442, y: 603 }, size: { w: 18, h: 24 } },
  { id: 17, pos: { x: 330, y: 620 }, size: { w: 16, h: 26 } },
  { id: 18, pos: { x: 347, y: 266 }, size: { w: 25, h: 29 } },
  { id: 19, pos: { x: 679, y: 465 }, size: { w: 20, h: 29 } },
  { id: 20, pos: { x: 18, y: 956 }, size: { w: 17, h: 18 } }
];

const simpleInput = [
  { id: 1, pos: { x: 0, y: 0 }, size: { w: 5, h: 5 } },
  { id: 2, pos: { x: 0, y: 0 }, size: { w: 5, h: 5 } },
  { id: 3, pos: { x: 0, y: 0 }, size: { w: 5, h: 5 } },
  // { id: 4, pos: { x: 429, y: 353 }, size: { w: 14, h: 25 } },
  // { id: 5, pos: { x: 232, y: 934 }, size: { w: 29, h: 11 } },
  // { id: 6, pos: { x: 796, y: 785 }, size: { w: 17, h: 18 } },
  // { id: 7, pos: { x: 508, y: 96 }, size: { w: 11, h: 18 } },
  // { id: 8, pos: { x: 83, y: 289 }, size: { w: 28, h: 23 } },
  // { id: 9, pos: { x: 291, y: 46 }, size: { w: 21, h: 17 } },
  // { id: 10, pos: { x: 505, y: 954 }, size: { w: 23, h: 15 } },
];


class Matrix {
  constructor(input, width = 1000, height = 1000) {
    this.input = input;
    this.width = width;
    this.height = height;
    this.matrix = this.processInput(this.input);

    this.toString = this.toString.bind(this);
    this.processInput = this.processInput.bind(this);
  }

  generate(width, height) {
    const matrix = [];

    for (let i = 0; i < height; i++) {
      matrix.push(
        Array.from({ length: width }, () => {
          return ".";
        })
      );
    }

    return matrix;
  }

  processInput(input) {
    const matrix = this.generate(this.width, this.height);
    let conflictingTiles = 0;
    
    for (let obj of input) {
      for (let i = obj.pos.y; i < obj.pos.y + obj.size.h; i++) {
        for (let j = obj.pos.x; j < obj.pos.x + obj.size.w; j++) {
          if (matrix[i][j] === '.') {
            matrix[i][j] = '#';
          } else if (matrix[i][j] === '#') {
            matrix[i][j] = 'X';
            conflictingTiles++;
          }
        }
      }
    }

    console.log(`numer of conflicting tiles: ${conflictingTiles}`);
    return matrix;
  }

  toString() {
    return this.matrix.map(arr => arr.join("")).join("\n");
  }
}

const fabric = new Matrix(input);

console.log(fabric.conflictingTiles);

const end = new Date().getTime();
console.log(`${end - start}ms`);
