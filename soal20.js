// Diberikan sebuah string s. Tentukan apakah terdapat karakter `a` dan `b` yang jarak  `a ke b` atau `b ke a` yang memiliki jarak minimal 3 karakter.
// Return "YES" jika ya dan "NO" jika tidak.

// Petunjuk
// Check tiap karakter kemudian check 4 karakter setelahnya.

function solution(str) {
    // Inisialisasi variabel result sebagai "NO" (sebagai nilai default)
    let result = "NO";
    
    // Iterasi melalui setiap karakter dalam string 'str'
    for (let i = 0; i < str.length; i++) {
        // Cek jika karakter saat ini adalah 'a' atau 'b'
        if(str[i] === 'a' || str[i] === 'b'){
            // Iterasi kedua dimulai dari 4 indeks setelah karakter saat ini
            for(let j = i+4; j < str.length; j++){
                // Jika ada pasangan 'ab' atau 'ba' setelah karakter saat ini,
                // set variabel 'result' menjadi "YES"
                if(str[i] === 'a' && str[j] === 'b' || str[i] === 'b' && str[j] === 'a'){
                    result = "YES";
                }
            }
        }
    }
    
    // Mengembalikan nilai 'result', yang mungkin berubah menjadi "YES" jika ditemukan pasangan 'ab' atau 'ba'
    return result;
}

// Contoh penggunaan:
console.log(solution("acdebae")) // expected output YES
console.log(solution("cdaecba")) // expected output NO

  
