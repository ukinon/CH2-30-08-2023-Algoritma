const users = require("../json/data.json");

// 1) cek eyeColor dan Gender
const checkEyeColorOrGender = (data) => {
    // 1. membuat variable array kosong
    let result = [];
    // 2. looping untuk mengecheck satu satu data
    for (let i = 0; i < data.length; i++) {
        // 3. check data eye color brown atau gender female
        if (data[i].eyeColor == 'brown' || data[i].gender == 'female') {
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
let data = checkEyeColorOrGender(users).data;
let totalData = checkEyeColorOrGender(users).totalData;

//memanggil function
console.log(data, "\n==============\n jumlah data: ", totalData);