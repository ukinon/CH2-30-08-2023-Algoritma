const users = require("../json/data.json");

// 1) fungsi untuk cek umur dan registered
const checkAgeAndRegistered = (data) => {
    // 1. membuat variable array kosong
    let result = [];
    // 2. looping untuk mengecheck satu satu data
    for (let i = 0; i < data.length; i++) {
        // 3. kondisi jika umur kurang dari 30 dan registered lebih dari 2018
        if (data[i].age < 30 && data[i].registered > '2018') {
            // 4. masukkan data yang sesuai hasil check kondisi di atas
            result.push(data[i])
        }
    }

    return {
        data: result,
        totalData: result.length
    };
}

//deklarasi variable untuk mengambil return value dari function di atas
let data = checkAgeAndRegistered(users).data;
let totalData = checkAgeAndRegistered(users).totalData;

//memanggil function
console.log(data, "\n==============\n jumlah data: ", totalData);