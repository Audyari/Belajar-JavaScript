let umur = 20;

if (umur == 18 || umur == 20) {
  console.log("anda sudah berumur", umur);
} else {
  console.log("anda belum berumur", umur);
}

console.log("true || true ", true || true);

console.log(" false || true ", false || true);

console.log(" false || false ", false || false);

const role = prompt("Masukan Role Anda : ");

if (role == "admin" || role == "superadmin") {
  console.log("anda admin");
} else {
  console.log("anda bukan admin");
}
