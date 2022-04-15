const enter = parseInt(prompt("Enter the value"));
for (let i = 1; i <= enter; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Bizz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBizz");
  } else {
    console.log(i);
  }
}
