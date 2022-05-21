const findDuplicates = (someString, repeatTimes) => {
  const array = someString.split("");
  const result = array.reduce((count, char) => {
    count[char] = (count[char] || 0) + 1;
    return count;
  }, {});

  const newArray = Object.keys(result).filter((character) => {
    if (result[character] === repeatTimes) {
      return character;
    }
  });

  return newArray;
};

console.log(findDuplicates("abcddef", 2)); // [d]
console.log(findDuplicates("tfghhhplffzaaa", 3)); // [h, a]
