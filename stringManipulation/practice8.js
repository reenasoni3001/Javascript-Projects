// Is the string in alphabetic order?
// Similarly, what’s the most efficient way to check if a string is in alphabetic order?
// Your function must be able to verify reverse-alphabetic order, also.

const isOrderedAlphabetically = (someString, reverseOrder) => {
  const array = someString.split(""); //O(n)
  for (let i = 0; i < array.length - 1; i++) {
    if (reverseOrder === false) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    } else {
      if (array[i] < array[i + 1]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isOrderedAlphabetically("abbcddeikl", false)); // true
console.log(isOrderedAlphabetically("jheca", true)); // true
console.log(isOrderedAlphabetically("aa", false)); // true
