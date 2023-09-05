const users = require("../json/data.json");

// 1) cek eyeColor
const checkEyeColor = (data) => {
    // 1. membuat variable array kosong
    let result = [];
    // 2. looping untuk mengecheck satu satu data
    for (let i = 0; i < data.length; i++) {
        // 3. check data eye color blue
        if (data[i].eyeColor == 'blue') {
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
let data = checkEyeColor(users).data;
let totalData = checkEyeColor(users).totalData;

//memanggil function
console.log(data, "\n==============\n jumlah data: ", totalData);