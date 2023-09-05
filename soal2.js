const users = require("./data.json");

// 1) tentukan yang bergender female
const checkFemaleGender = (data) => {
    // 1. membuat variable array kosong
    let result = [];
    // 2. looping untuk mengecheck satu satu data
    for (let i = 0; i < data.length; i++) {
        // 3. check data gender female
        if (data[i].gender === 'female') {
            // 4. masukkan data yang sesuai hasil check kondisi di atas
            result.push(data[i])
        }
    }

    return {
        data: result,
        totalData: result.length
    };
}

let data = checkFemaleGender(users).data;
let totalData = checkFemaleGender(users).totalData;

console.log(data, "\n==============\n jumlah data: ", totalData);