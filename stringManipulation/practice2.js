const isPalindrome = (someString) => {
  const split = someString.split("");
  const reverse = split.reverse();
  const result = reverse.join("");
  if (someString === result) {
    return true;
  } else return false;
};

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("apple")); // false
