// // kode JavaScript untuk melakukan loop sebanyak 10

// for (let i = 1; i <= 10; i++) {
//     document.write("<p>Congrats you win Rp. 1000.000.00</p>");
//   }

// //  Menentukan bilangan ganjil atau genap

// let number = 5;
// if (number % 2 === 0) {
//   console.log(number + " adalah bilangan genap");
// } else {
//   console.log(number + " adalah bilangan ganjil");
// }

// // Menentukan grade mahasiswa berdasarkan nilai yang diperoleh

// let score = 80;
// let grade;
// if (score >= 90) {
//   grade = "A";
// } else if (score >= 80) {
//   grade = "B";
// } else if (score >= 70) {
//   grade = "C";
// } else if (score >= 60) {
//   grade = "D";
// } else {
//   grade = "E";
// }
// console.log("Nilai Anda: " + score + ", Grade: " + grade);

// Menampilkan pesan berdasarkan waktu

// let hour = new Date().getHours();
// let greeting;
// if (hour < 12) {
//   greeting = "Selamat pagi!";
// } else if (hour < 18) {
//   greeting = "Selamat siang!";
// } else {
//   greeting = "Selamat malam!";
// }
// console.log(greeting);

// Menampilkan harga diskon

// let price = 100000;
// let discount = 0.2;
// let discountedPrice;
// if (price >= 100000) {
//   discountedPrice = price - (price * discount);
// } else {
//   discountedPrice = price;
// }
// console.log("Harga setelah diskon: " + discountedPrice);

// let totalBelanja = 500000;
// let diskon;
// if (totalBelanja >= 1000000) {
//   diskon = 0.2; // 20% diskon
// } else if (totalBelanja >= 500000) {
//   diskon = 0.1; // 10% diskon
// } else {
//   diskon = 0;
// }
// let totalSetelahDiskon = totalBelanja - (totalBelanja * diskon);
// console.log("Total belanja: Rp " + totalBelanja);
// console.log("Diskon: " + diskon * 100 + "%");
// console.log("Total setelah diskon: Rp " + totalSetelahDiskon);

// Menampilkan hasil kalkulasi berdasarkan operator matematika

// let num1 = 10;
// let num2 = 5;
// let operator = "+";
// let result;
// if (operator === "+") {
//   result = num1 + num2;
// } else if (operator === "-") {
//   result = num1 - num2;
// } else if (operator === "*") {
//   result = num1 * num2;
// } else if (operator === "/") {
//   result = num1 / num2;
// } else {
//   console.log("Operator tidak valid");
// }
// console.log("Hasil kalkulasi: " + result);

// Penggunaan innerHTML

// var number = 5;
// var hasil = document.getElementById("output");
// if (number % 2 === 0) {
//     hasil.innerHTML = number + " adalah bilangan genap";
// } else {
//     hasil.innerHTML = number + " adalah bilangan ganjil";
// }

// var num1 = 10;
// var num2 = 5;
// var operator = "+";
// var hasil = document.getElementById("output");
// var result;
// if (operator === "+") {
//   result = num1 + num2;
// } else if (operator === "-") {
//   result = num1 - num2;
// } else if (operator === "*") {
//   result = num1 * num2;
// } else if (operator === "/") {
//   result = num1 / num2;
// } else {
//   hasil.innerHTML = "Operasi Tidak Valid";
// }
// hasil.innerHTML = "Hasil Kalkulasi : " + result;

// JavaScript dengan input value menggunakan prompt alert

// // Meminta input dari user menggunakan prompt alert
// let nilai = prompt("Masukkan nilai Anda:");

// // Mengubah nilai menjadi tipe data number
// nilai = Number(nilai);

// // Mengecek apakah nilai yang dimasukkan valid (bernilai antara 0 hingga 100)
// if (nilai >= 0 && nilai <= 100) {
//   // Jika nilai antara 0 hingga 100, cek kategori nilai
//   if (nilai >= 90) {
//     alert("Nilai Anda A");
//   } else if (nilai >= 80) {
//     alert("Nilai Anda B");
//   } else if (nilai >= 70) {
//     alert("Nilai Anda C");
//   } else if (nilai >= 60) {
//     alert("Nilai Anda D");
//   } else {
//     alert("Nilai Anda E");
//   }
// } else {
//   // Jika nilai tidak valid, tampilkan pesan error
//   alert("Nilai yang dimasukkan tidak valid.");
// }

// // Meminta input dari user menggunakan prompt alert
// let umur = prompt("Masukkan umur Anda:");

// // Mengubah umur menjadi tipe data number
// umur = Number(umur);

// // Mengecek apakah umur yang dimasukkan valid (lebih besar dari 0)
// if (umur > 0) {
//   // Jika umur lebih besar dari 0, cek apakah sudah cukup umur
//   if (umur >= 18) {
//     alert("Anda sudah cukup umur");
//   } else {
//     alert("Anda belum cukup umur");
//   }
// } else {
//   // Jika umur tidak valid, tampilkan pesan error
//   alert("Umur yang dimasukkan tidak valid.");
// }

// Program untuk menentukan apakah sebuah kata mengandung huruf vokal

// let kata = "javascript";
// let vokal = false;
// for (let i = 0; i < kata.length; i++) {
//   let huruf = kata[i];
//   if ("aiueo".indexOf(huruf) !== -1) {
//     vokal = true;
//     break;
//   }
// }
// if (vokal) {
//   console.log("Kata " + kata + " mengandung huruf vokal");
// } else {
//   console.log("Kata " + kata + " tidak mengandung huruf vokal");
// }

// Program untuk menghitung luas dan keliling persegi panjang

// let panjang = 5;
// let lebar = 3;
// let luas = panjang * lebar;
// let keliling = 2 * (panjang + lebar);
// console.log("Panjang: " + panjang);
// console.log("Lebar: " + lebar);
// console.log("Luas: " + luas);
// console.log("Keliling: " + keliling);

// Menghitung rata-rata nilai

// let nilai1 = 80;
// let nilai2 = 85;
// let nilai3 = 90;
// let rataRata = (nilai1 + nilai2 + nilai3) / 3;
// console.log("Rata-rata nilai adalah " + rataRata);

// Menentukan bilangan prima

// let bilangan = 23;
// let prima = true;
// for (let i = 2; i < bilangan; i++) {
//   if (bilangan % i === 0) {
//     prima = false;
//     break;
//   }
// }
// if (prima) {
//   console.log(bilangan + " adalah bilangan prima");
// } else {
//   console.log(bilangan + " bukan bilangan prima");
// }

// Menentukan bilangan positig negatif

// let bilangan = -5;
// if (bilangan > 0) {
//   console.log(bilangan + " adalah bilangan positif");
// } else if (bilangan < 0) {
//   console.log(bilangan + " adalah bilangan negatif");
// } else {
//   console.log(bilangan + " adalah nol");
// }

// Menentukan bilangan Fibonacci

// let n = 10;
// let a = 0, b = 1, c;
// if (n === 0) {
//   console.log(0);
// } else if (n === 1) {
//   console.log(1);
// } else {
//   for (let i = 2; i <= n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   console.log("Bilangan Fibonacci ke-" + n + " adalah " + b);
// }

// penggunaan while untuk memvalidasi input

// let userInput = prompt("Masukkan angka antara 1 dan 10:");
// let valid = false;

// while (!valid) {
//   if (userInput >= 1 && userInput <= 10) {
//     valid = true;
//     console.log("Input valid!");
//   } else {
//     userInput = prompt("Input tidak valid. Masukkan angka antara 1 dan 10:");
//   }
// }

// Penggunaan do-while dalam JavaScript untuk menghitung jumlah angka yang dimasukkan

// let total = 0;
// let userInput;
// do {
//   userInput = prompt("Masukkan angka (ketik 'selesai' untuk menghentikan):");
//   if (!isNaN(userInput)) {
//     total += parseInt(userInput);
//   }
// } while (userInput !== "selesai");

// console.log(`Jumlah angka yang dimasukkan: ${total}`);

// penggunaan while untuk mengecek input pengguna

// let userInput = '';
// while (userInput !== 'exit') {
//   userInput = prompt('Masukkan input (ketik "exit" untuk keluar):');
//   console.log(`Input pengguna: ${userInput}`);
// }

// Contoh penggunaan tipe data string

// let nama = 'John';
// let pekerjaan = "Web Developer";

// console.log('Nama saya adalah ' + nama + ' dan saya bekerja sebagai ' + pekerjaan);

// Contoh penggunaan tipe data number:

// let panjang = 10;
// let lebar = 5;
// let luas = panjang * lebar;

// console.log('Luas persegi panjang adalah ' + luas);

// Contoh penggunaan tipe data boolean

// let isHujan = true;
// let isMalam = false;

// if (isHujan) {
//   console.log('Bawa payung');
// }

// if (isMalam) {
//   console.log('Waktunya tidur');
// }
// else {
//   console.log('Masih siang');
// }

// Contoh penggunaan tipe data null

// let tidakDidefinisikan;

// if (tidakDidefinisikan === undefined) {
//   console.log('Variabel tidak didefinisikan');
// }
// else {
//   console.log('Variabel memiliki nilai ' + tidakDidefinisikan);
// }

// Contoh penggunaan tipe data object

// let buku = {
//   judul: 'Harry Potter and the Philosopher\'s Stone',
//   penulis: 'J.K. Rowling',
//   tahun: 1997
// };

// console.log('Buku ' + buku.judul + ' ditulis oleh ' + buku.penulis + ' pada tahun ' + buku.tahun);

// Contoh penggunaan tipe data array

// let namaHari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

// console.log('Hari ini adalah ' + namaHari[3]); // Output: Hari ini adalah Kamis

var num = parseInt(prompt("Masukan angka"));
var result = document.getElementById("output");

for (x = 1; x <= num; x++) {
  result.innerHTML = "Ini adalah angka " + x;
}