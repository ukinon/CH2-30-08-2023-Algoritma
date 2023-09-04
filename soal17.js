// Nilai ujian mahasiswa dikategorikan sebagai berikut :
// - A : 91 - 100
// - B : 81 - 90
// - C : 71 - 80
// - D : 61 - 70
// - E : <= 60\
// Diberikan sebuah nilai ujian, tentukan kategori dari nilai tersebut

// Petunjuk
// Check input dan cocokan dengan kategori yang telah dibuat.


function solution(n) {
    let result; // Inisialisasi variabel result
    
    // Memeriksa rentang nilai 'n' untuk menentukan hasil
    if(n >= 91){
        result = "A"; // Jika n >= 91, hasilnya adalah "A"
    }
    if(n >= 81 && n < 91){
        result = "B"; // Jika n >= 81 dan n < 91, hasilnya adalah "B"
    }
    if(n >= 71 && n < 81){
        result = "C"; // Jika n >= 71 dan n < 81, hasilnya adalah "C"
    }
    if(n >= 61 && n < 71){
        result = "D"; // Jika n >= 61 dan n < 71, hasilnya adalah "D"
    }
    if(n <= 60){
        result = "E"; // Jika n <= 60, hasilnya adalah "E"
    }
    
    return result; // Mengembalikan hasil yang telah ditentukan
}

// Contoh penggunaan:
console.log(solution(95)) // expected output A
console.log(solution(76)) // expected output C
