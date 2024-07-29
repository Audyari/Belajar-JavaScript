// Cara Memanggil Object Di Dalam Array

let mahasiswa = [
    {
        nama : "Audyari Wiyono",
        umur : 41,  
        email : "6Yn8t@example.com",
        jurusan : "Teknik Informatika",
        alamat : {
            kota : "Pondok Gede",
            provinsi : "Jawa Tengah"
        }
    },
    {
        nama : "Audyari Wiyono",
        umur : 41,  
        email : "6Yn8t@example.com",
        jurusan : "Teknik Informatika",
        alamat : {
            kota : "Pondok Gede",
            provinsi : "Jawa Tengah"
        }
    },
    {
        nama : "Audyari Wiyono",
        umur : 41,  
        email : "6Yn8t@example.com",
        jurusan : "Teknik Informatika",
        alamat : {
            kota : "Pondok Gede",
            provinsi : "Jawa Tengah"
        }
    }
]

console.log(mahasiswa)

console.log("mahasiswa[0].nama = ",mahasiswa[0].nama)

console.log("mahasiswa[0].alamat.kota = ",mahasiswa[0].alamat.kota)

console.log("mahasiswa[0].alamat.provinsi = ",mahasiswa[0].alamat.provinsi)

console.log("mahasiswa[1].nama = ",mahasiswa[1].nama)

console.log("mahasiswa[1].alamat.kota = ",mahasiswa[1].alamat.kota)

console.log("mahasiswa[1].alamat.provinsi = ",mahasiswa[1].alamat.provinsi)

console.log("mahasiswa[2].nama = ",mahasiswa[2].nama)

