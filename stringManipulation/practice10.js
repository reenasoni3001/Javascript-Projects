// Search for a string within a string
// Does the target string contain the provided string?

const stringContains = (someString, stringToSearchFor) => {
  if (someString.includes(stringToSearchFor)) {
    return true;
  } else return false;
};

console.log(stringContains("catapult", "cat")); // true

//.includes() method is used to perform a case-sensitive search
//  to find out if a particular string is contained within another string.
// The includes() method returns true if the substring is found else, it will return false
