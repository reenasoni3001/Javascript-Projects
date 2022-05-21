// Evenly mix two arrays

let array = [1, 2, 3];
let array2 = [4, 5, 6, 7, 8];

const len = Math.max(array.length, array2.length);

const result = [];
for (let i = 0; i < len; i++) {
  if (array[i] !== undefined) {
    result.push(array[i]);
  }
  if (array2[i] !== undefined) {
    result.push(array2[i]);
  }
}

console.log(result);
