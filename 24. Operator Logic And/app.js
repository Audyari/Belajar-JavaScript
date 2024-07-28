let umur = 18;
let jenisKelamin = "laki-laki";

if (umur >= 18 && jenisKelamin == "laki-laki") {
  console.log("anda sudah berumur");
} else {
  console.log("anda belum berumur");
}

console.log("true && true ", true && true);

console.log(" false || true ", false || true);

console.log(" !false", !false);

console.log(" !true", !true);

console.log(" !!true", !!true);

console.log("   !!false", !!false);

console.log(" !!0", !!0);

console.log(" !!1", !!1);

console.log(" !!-1", !!-1);

console.log(" !!0.1", !!0.1);

console.log(" !!-0.1", !!-0.1);

console.log(" !!NaN", !!NaN);

console.log(" !!Infinity", !!Infinity);

console.log(" !!-Infinity", !!-Infinity);

const password = prompt("Enter password");
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("Password is strong enough to use ");
} else {
  console.log("Password harus terdiri dari 6 karakter dan tidak ada spasi");
}
