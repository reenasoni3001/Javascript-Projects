const mostCommonCharacter = (someString) => {
  //sort string alphabetically
  const array = someString.split("");
  const alphaArray = array.sort();
  const result = alphaArray.reduce((result, char) => {
    result[char] = (result[char] || 0) + 1;
    return result;
  }, {});

  // Compare the values with each other and return the
  // character with the highest result.
  const highestChar = Object.keys(result).reduce((a, b) =>
    result[a] >= result[b] ? a : b
  );

  // Return an array with the character and the result.
  return highestChar;

  //compare the values with earch other and return the char with highest result
  //return the character which comes first alphabetically. ??
};

console.log(mostCommonCharacter("abcddefg")); // d
console.log(mostCommonCharacter("heggbdeff")); // e
