const hari = 1;

switch (hari) {
  case 1:
    console.log("ini senin");
    break;
  case 2:
    console.log("ini selasa");
    break;
  default:
    console.log("bukan hari");
}

const warnaBalon = prompt("Masukan Warna Balon").toLowerCase();

switch (warnaBalon) {
  case "merah":
    console.log("ini merah");
    break;
  case "kuning":
    console.log("ini kuning");
    break;
  case "hijau":
    console.log("ini hijau");
    break;
  default:
    console.log("bukan warna");
}
