// Find the odd one out
// Find the odd one out in the provided array.
// All array elements are equal, except one. Your function must return this odd one out.

const findOddOneOut = (someArray) => {
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i] !== "a") {
      return someArray[i];
    }
  }
};

console.log(findOddOneOut(["a", "a", "b", "a"])); // b

//wamt a generic solution???
