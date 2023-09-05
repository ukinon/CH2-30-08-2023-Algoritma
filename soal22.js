// Buat sebuah function yang bisa melakukan fungsi dari fibonacci number di dalam kode Javascript. 
// Bisa diskusi dengan teman kelompokmu ya!

// Fungsi untuk menampilkan urutan angka fibonacci
function fibonacci(data) {
    //deklarasi variable result dengan default value 0 dan 1 yaitu 2 angka awal dalam angka fibonacci
    const result = [0, 1];

    // Menggunakan loop untuk menghitung dan menambahkan bilangan fibonacci ke dalam array.
    for (let i = 2; i < data; i++) {
        //deklarasi variable yang berisi rumus bilangan fibonacci
      const nextNum = result[i - 1] + result[i - 2];
      //memasukkan hasil hitungan ke dalam array
      result.push(nextNum);
    }
  
    return result;
  }
  
  //memanggil fungsi
  console.log(fibonacci(10));
  