const vowelOrConsonant = (someString, position) => {
  const array = someString.split("");
  if (
    array[position] === "a" ||
    array[position] === "e" ||
    array[position] === "i" ||
    array[position] === "o" ||
    array[position] === "u"
  ) {
    return "vowel";
  } else return "consonent";
};

console.log(vowelOrConsonant("hello", 4)); // vowel
console.log(vowelOrConsonant("cat", 2)); // consonent
