// Ada sebuah potongan array seperti di bawah.

// Buatlah perhitungan untuk menentukan dari nilai kelulusan dari siswa dengan aturan:
// Nilai di bawah 50 maka tidak lulus
// Nilai di atas 50 dan di bawah 70 maka remedial
// Nilai di atas 70 maka lulus

// Bisa diskusi dengan kelompokmu ya!

function filterNilai(arr){
let result;
if(arr.score < 50){
     result = "Tidak Lulus";
}
if (arr.score >= 50 && arr.score < 70){
     result ="Remedial" ;
}
if(arr.score >= 70){
     result="Lulus";
}
return result;
}

const students = [
    { name: "Peter", score: 30},
    { name: "Parker", score: 50},
    { name: "Harry", score: 70},
    { name: "Eva", score: 79},
    { name: "Justin", score: 60},
    { name: "Bieber", score: 90},
    { name: "Evan", score: 55},
    { name: "Rowling", score: 90}
]

for(let i = 0; i < students.length; i++){
    console.log(`Nama: ${students[i].name}, Nilai: ${students[i].score}, Status: ${filterNilai(students[i])}`);
}