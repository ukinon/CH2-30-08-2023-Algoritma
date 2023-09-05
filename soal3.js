const users = require("./data.json");

// 1) tentukan yang mempunyai buah favorit dia nya banana
const checkRegistered = (data) => {
    // 1. membuat variable array kosong
    let result = [];
    // 2. looping untuk mengecheck satu satu data
    for (let i = 0; i < data.length; i++) {
        // 3. check data yang register 2014 - 2018
        if (data[i].registered >= '2014' && data[i].registered <= '2018') {
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
let data = checkRegistered(users).data;
let totalData = checkRegistered(users).totalData;

//memanggil function
console.log(data, "\n==============\n jumlah data: ", totalData);