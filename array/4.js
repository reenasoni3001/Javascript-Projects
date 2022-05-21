// Find the smallest and largest numbers
// Deduce the smallest and the largest number from the supplied numeric array.
// Return an array containing these numbers, smallest number first.

const findSmallestAndLargestNumbers = (someArray) => {
  const sorted = someArray.sort((a, b) => {
    return a > b ? 1 : -1;
  });

  console.log(sorted[0]);
  console.log(sorted[sorted.length - 1]);
};

console.log(findSmallestAndLargestNumbers([14, 28, 3, 8, 2]));
// 2, 28
