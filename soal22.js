// Buat sebuah function yang bisa melakukan fungsi dari fibonacci number di dalam kode Javascript. 
// Bisa diskusi dengan teman kelompokmu ya!

function fibonacci(n) {
    if (n <= 1) {
        return n; // Basis: Fibonacci dari 0 adalah 0 dan dari 1 adalah 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); // Rekursif: Fibonacci dari n adalah jumlah dari Fibonacci(n-1) dan Fibonacci(n-2)
    }
}

// Contoh penggunaan:
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
