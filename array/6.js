// Return only unique values
// In this JavaScript array exercise, the supplied array may contain duplicate values.
//  Write a function to return only unique values —
//  values that only occur exactly one time within the provided array.

const onlyUnique = (someArray) => {
  const frequency = someArray.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }

    acc[curr]++;
    return acc;
  }, {});

  return Object.keys(frequency)
    .filter((v) => frequency[v] === 1)
    .map((v) => parseInt(v));
};

console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 5])); // [2, 5]
