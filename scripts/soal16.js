// Yudi ingin menarik uang sebanyak X rupiah dari ATM. Mesin ATM hanya akan menerima transaksi jika X kelipatan 5 dan saldo rekening Yudi memiliki cukup uang untuk melakukan transaksi penarikan (termasuk biaya bank). Untuk setiap penarikan yang berhasil, bank mengenakan biaya 0,5 rupiah.
// Diberikan X adalah uang yang ingin yudi tarik dan Y adalah jumlah uang dalam rekening Yudi. Ayo hitung saldo akun Yudi setelah melakukan transaksi!

// Petunjuk
// Cukup lakukan operasi aritmatika biasa.

function solution(x, y) {
    let result; // Inisialisasi variabel result
    
    // Memeriksa apakah 'x' adalah kelipatan 5
    if (x % 5 === 0) {
        // Jika 'x' adalah kelipatan 5, menghitung selisih 'y - x - 0.5'
        result = y - x - 0.5;
    } else {
        // Jika 'x' bukan kelipatan 5, hasilnya adalah 'y' tanpa perubahan
        result = y;
    }

    return result; // Mengembalikan hasil yang telah ditentukan
}

// Contoh penggunaan:
console.log(solution(30, 120)) // expected output 89.5
console.log(solution(42, 100)) // expected output 100

