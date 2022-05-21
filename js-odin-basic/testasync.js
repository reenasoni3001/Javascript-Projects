// function getusers() {
//   return Promise.resolve([{ name: "ram" }, { name: "shyam" }]);
// }

// function capitalizeUsers(users) {
//   const capitializedName = Promise.resolve(
//     users.map((u) => u.name.toUpperCase())
//   );
//   return capitializedName;
// }
// function printUsers(capitializedName) {
//   console.log(capitializedName);
// }

// console.log("start");
// getusers().then((data) => {
//   capitalizeUsers(data).then((data) => {
//     printUsers(data);
//   });
// });
// console.log("finish");

// console.log("start");

// (async () => {
//   const users = await getusers();
//   const capitalUsers = await capitalizeUsers(users);
//   printUsers(capitalUsers);
// })();

// console.log("finish");

function myName() {
  console.log("Hello it's me Reena :P");
}
console.log("start");
setTimeout(myName, 5000);
console.log("finish");
