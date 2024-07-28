const password = prompt("Enter password");

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Password is strong enough to use ");
  } else {
    console.log("Password harus terdiri dari 6 karakter dan tidak ada spasi");
  }
} else {
  console.log("Password harus terdiri dari 6 karakter");
}

console.log(password.indexOf(" "));
