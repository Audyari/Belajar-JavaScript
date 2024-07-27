if (1 + 1 == 2) {
  console.log("1 + 1 = 2 adalah benar");
}

let angka = Math.random();

if (angka >= 0.5) {
  console.log("Angka random diatas 50%", angka);
} else {
  console.log("Angka random dibawah 50%", angka);
}

// Create an event listener for the button click
function executeJavascript() {
  let umur = 18;
  let inputUmur = document.getElementById("inputUmur").value;
  umur = Number(inputUmur);
  if (umur >= 0) {
    console.log("anda sudah berumur", umur);
    document.getElementById("output").innerHTML = "anda sudah berumur " + umur;
  }
}
