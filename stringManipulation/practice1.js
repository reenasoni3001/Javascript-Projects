const reverseString = (someString) => {
  const split = someString.split("");
  const reverse = split.reverse();
  const result = reverse.join("");
  return result;
};

console.log(reverseString("I am a string")); // gnirts a ma I
