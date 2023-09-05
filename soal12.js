const users = require("./data.json");

// 1) fungsi untuk memfilter user sesuai kebutuhan
const userFilter = (data) => {
    // 1. membuat variable array kosong
    let result = [];
    // 2. looping untuk mengecheck satu satu data
    for (let i = 0; i < data.length; i++) {
        // 3. kondisi jika nama kurang dari 10 karakter dan umur lebih dari 30
        if (Array.from(data[i].name).length < 10 && data[i].age > 30) {
            // 4. masukkan data yang sesuai hasil check kondisi di atas
            result.push(data[i])
        }
        //5. kondisi jika gender male dan eyeColor brown
        else if(data[i].gender == 'male' && data[i].eyeColor == 'brown'){
            // 6. masukkan data yang sesuai hasil check kondisi di atas
            result.push(data[i])
        }
    }

    return {
        data: result,
        totalData: result.length
    };
}

//deklarasi variable untuk mengambil return value dari function di atas
let data = userFilter(users).data;
let totalData = userFilter(users).totalData;

//memanggil function
console.log(data, "\n==============\n jumlah data: ", totalData);