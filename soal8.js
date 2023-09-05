const users = require("./data.json");

// 1) tentukan yang memiliki company berhuruf depan L
const checkCompanyFirstLetterL = (data) => {
    // 1. membuat variable array kosong
    let result = [];
    // 2. looping untuk mengecheck satu satu data
    for (let i = 0; i < data.length; i++) {
        // 3. kondisi jika index 0 array dari company = Z
        if (Array.from(data[i].company)[0] === 'L') {
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
let data = checkCompanyFirstLetterL(users).data;
let totalData = checkCompanyFirstLetterL(users).totalData;

//memanggil function
console.log(data, "\n==============\n jumlah data: ", totalData);