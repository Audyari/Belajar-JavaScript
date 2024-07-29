// Cara Membuat Object Berjalan

let mahasiswa = {
    nama : "Audyari Wiyono",
    umur : 41,
    email : "6Yn8t@example.com",
    jurusan : "Teknik Informatika",
    alamat : {
        kota : "Pondok Gede",
        provinsi : "Jawa Tengah"
    }
}

console.log("Nama saya " + mahasiswa.nama + ", umur saya",mahasiswa.umur)

console.log("Tinggal di ",mahasiswa.alamat.kota)

console.log("Saya tinggal di ",mahasiswa.alamat.provinsi)

mahasiswa.umur = 42

console.log("Saya sekarang berumur",mahasiswa.umur)

mahasiswa.alamat.kota = "Semarang"

console.log("Saya tinggal",mahasiswa.alamat.kota)

mahasiswa.hobi = ["Membaca", "Menulis", "Mendaki"]

console.log("Saya hobi",mahasiswa.hobi)

mahasiswa.hobi.push("Makan")

console.log("Saya hobi",mahasiswa.hobi)

mahasiswa.hobi.pop()

console.log(" Saya hobi",mahasiswa.hobi)

delete mahasiswa.hobi

console.log("Saya hobi",mahasiswa.hobi)



