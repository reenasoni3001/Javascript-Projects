// Alternating caps
// Return the supplied string, but every other letter should be capitalized.

const alternateCaps = (someString) => {
  const toArray = someString.split(" ");
  const result = toArray.map((value) => {
    return value.charAt(0).toUpperCase() + value.slice(1); //slice() extracts a part of a string and returns the extracted part
  });
  return result.join(" ");
};

console.log(alternateCaps("I am a string")); // I aM a StRiNg
