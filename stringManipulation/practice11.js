// Shuffle the string
// Write a function to completely randomize a given string.
//  The string should be scrambled entirely, in a random a manner as possible.

const shuffle = (someString) => {
  // your code
  const array = someString.split("");
  const result = array.sort((a, b) => {
    return 0.5 - Math.random();
  });

  return result.join("");
};

console.log(shuffle("hello")); // lelho
