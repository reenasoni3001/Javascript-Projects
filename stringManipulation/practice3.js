const removeCharacters = (someString, charactersToRemove) => {
  const array = someString.split("");
  const result = array.filter((element) => {
    return !charactersToRemove.includes(element);
  });

  return result.join("");
};

console.log(removeCharacters("I am an example string", ["a", "x"]));
// I m n emple string
