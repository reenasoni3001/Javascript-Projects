let userName = prompt("Who's there?", "");
if (userName === "Admin") {
  let password = prompt("password");
  if (password === "TheMaster") {
    alert("Welcome");
  } else if (password === "" || password === null) {
    alert("cancelled");
  } else alert("Wrong password");
} else if (userName === "") {
  alert("cancelled");
} else alert("i dont know you");
