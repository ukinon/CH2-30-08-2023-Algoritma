// Diberikan sebuah string alamat IP yang valid. Untuk setiap tanda . pada alamat IP gantilah menjadi tanda ()

// Petunjuk
// Loop string tersebut dan replace simbol yang di maksud.

function solution(str) {
  // Iterasi melalui setiap karakter dalam string 'str'
  for (let i = 0; i < str.length; i++) {
      // Cek jika karakter saat ini adalah tanda titik (.)
      if (str[i] === '.') {
          // Mengganti setiap tanda titik (.) dengan string '()'
          str = str.replace('.', '()');
      }
  }
  // Mengembalikan string yang telah dimodifikasi
  return str;
}

// Contoh penggunaan:
console.log(solution("1.1.1.1")) // expected output 1()1()1()1()
console.log(solution("192.168.1.1")) // expected output 192()268()1()1()
