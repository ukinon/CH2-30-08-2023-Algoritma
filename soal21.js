// Buatlah sebuah function untuk melakukan format sorting array di dalam kode Javascript. 
// Bisa diskusi dengan teman kelompokmu ya!

function bubbleSortArrayAsc(arr) {
    // Mulai iterasi melalui seluruh elemen dalam array
    for (let i = 0; i < arr.length; i++) {
        // Iterasi kedua untuk membandingkan pasangan elemen
        // dan menggeser elemen-elemen yang lebih besar ke arah akhir array
        for (let j = 0; j < (arr.length - i - 1); j++) {
            // Membandingkan dua elemen berturut-turut
            if (arr[j] > arr[j + 1]) {
                // Jika elemen pertama lebih besar dari elemen kedua, tukar mereka
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // Mengembalikan array yang telah diurutkan
    return arr
}

function bubbleSortArrayDesc(arr) {
    // Mulai iterasi melalui seluruh elemen dalam array
    for (let i = 0; i < arr.length; i++) {
        // Iterasi kedua untuk membandingkan pasangan elemen
        // dan menggeser elemen-elemen yang lebih besar ke arah akhir array
        for (let j = 0; j < (arr.length - i - 1); j++) {
            // Membandingkan dua elemen berturut-turut
            if (arr[j] < arr[j + 1]) {
                // Jika elemen pertama lebih kecil dari elemen kedua, tukar
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // Mengembalikan array yang telah diurutkan
    return arr
}

// memanggil fungsi
console.log(bubbleSortArrayAsc([3, 7, 4, 1, 2, 10]));
console.log(bubbleSortArrayDesc([3, 7, 4, 1, 2, 10]));
