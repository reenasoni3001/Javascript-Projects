const sortString = (someString, reverseOrder) => {
  const array = someString.split("");
  const sorted = array.sort((a, b) => {
    if (reverseOrder === true) {
      return a > b ? -1 : 1; //descending
    } else {
      return a > b ? 1 : -1; //ascending
    }
  });

  return sorted.join("");
};

console.log(sortString("bacd", false)); // "abcd"
console.log(sortString("axedzpq", true)); // "zxqpeda"

//ascending - small to large
//descending - large to small
