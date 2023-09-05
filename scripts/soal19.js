// Diberikan sebuah angka n, jumlahkanlah masing - masing digit pada angka tersebut.

// Petunjuk
// Gunakan operator modulus untuk mengambil setiap digit dari angka tersebut

function solution(n) {
    //deklarasi variable result
    let result = 0;
    //merubah n ke string
    let nToString = n.toString()
    
    //melakukan looping untuk mengambil setiap digit dari n
    for (let i = 0; i < nToString.length; i++) {
        //deklarasi variable dikit yang berisi perubahan n string ke integer
        const digit = parseInt(nToString[i]);

        //menambah result dengan digit
        result += digit;
    }
  
    return result;
  }
  

console.log(solution(2022)) // expected output 6
console.log(solution(1001)) // expected output 2
