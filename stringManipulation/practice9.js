// Capitalize the first letter of each word
// Write a function to capitalize the first letter of each word in the provided string.

const capitalizeFirstLetterOfEachWord = (someString) => {
  const toArray = someString.split(" ");
  const result = toArray.map((value) => {
    return value.charAt(0).toUpperCase() + value.slice(1); //slice() extracts a part of a string and returns the extracted part
  });
  return result.join(" ");
};

console.log(capitalizeFirstLetterOfEachWord("i am a string")); // I Am A String
