// Split the numeric array by odd/even
// Write a function to separate a single array in to two separate arrays.
// The supplied array will only contain numeric values. Your function should output two arrays:
//  one containing odd numbers, the other containing even numbers.

// The returned arrays should be ordered appropriately, with distinct values only (no duplicates).
// The even array should be returned first.

const splitByOddAndEven = (someArray) => {
  //   var unique = someArray.filter((v, i, a) => a.indexOf(v) === i);
  const unique = [...new Set(someArray)];
  console.log(unique);
  const oddArray = [];
  const evenArray = [];

  for (let i = 0; i <= unique.length - 1; i++) {
    if (unique[i] % 2 === 0) {
      evenArray.push(unique[i]);
    } else {
      oddArray.push(unique[i]);
    }
  }
  console.log(evenArray, oddArray);
};

//how to find unique values????

console.log(splitByOddAndEven([2, 3, 7, 6, 2, 4, 9]));
// [[2, 4, 6], [3, 7, 9]]

//indexOf() --> The indexOf() method returns the position of the first occurrence of a value in a string.

// The indexOf() method returns -1 if the value is not found.

// The indexOf() method is case sensitive.
