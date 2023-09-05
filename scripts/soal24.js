// buat looping sehingga membuat angka 1 sampai dengan 100
// tapi setiap modulu 3, 5 dan 3 DAN 5 ada spesial nya spt penjelasan dibawah ini =

// Ada sebuah mantra yang mengeluarkan mantra Fizz Buzz dengan rule:

// Mantra “Fizz” akan keluar dengan nilai modulo 3
// Mantra “Buzz” akan keluar dengan nilai modulo 5 
// Mantra akan “Fizz Buzz” akan keluar dengan nilai modulo 3 dan 5

// Bisa diskusi dengan teman kelompokmu ya!

// expected output :
// 1
// 2
// Fizz
// 3
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// dan seterus nya sampai dengan 100

function fizzBuzz() {
    // Membuat array kosong untuk menyimpan hasil
    const result = [];
  
    // Loop dari 1 hingga 100
    for (let i = 1; i <= 100; i++) {
      // Jika angka adalah kelipatan 3 dan 5, tambahkan "FizzBuzz" ke dalam array
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
      }
      // Jika angka adalah kelipatan 5, tambahkan "Buzz" ke dalam array
      else if (i % 5 === 0) {
        result.push("Buzz");
      }
      // Jika angka adalah kelipatan 3, tambahkan "Fizz" ke dalam array
      else if (i % 3 === 0) {
        result.push("Fizz");
      }
      // Jika tidak ada kondisi di atas yang terpenuhi, tambahkan angka itu sendiri ke dalam array
      else {
        result.push(i);
      }
    }
  
    // Mengembalikan hasil berupa array yang berisi Fizz, Buzz, FizzBuzz, atau angka
    return result;
  }
  
  // Memanggil fungsi fizzBuzz() dan mencetak hasilnya ke konsol
  console.log(fizzBuzz());
  