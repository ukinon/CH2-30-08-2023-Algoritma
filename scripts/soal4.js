const users = require("../json/data.json");

// 1) tentukan yang memiliki teman bernama imam
const checkFriends = (data) => {
    // 1. membuat variable array kosong
    let result = [];
    // 2. looping untuk mengecheck satu satu data
    for (let i = 0; i < data.length; i++) {
        //3. looping untuk mengecek data teman
        for(let j = 0; j < data[i].friends.length; j++){
            //4. kondisi jika teman bernama imam
            if(data[i].friends[j].name == "Imam"){
                //5. memasukan data yang relevan kedalam result
                result.push(data[i]);
            }
        }
    }

    return {
        data: result,
        totalData: result.length
    };
}

//deklarasi variable untuk mengambil return value dari function di atas
let data = checkFriends(users).data;
let totalData = checkFriends(users).totalData;

//memanggil function
console.log(data, "\n==============\n jumlah data: ", totalData, "\n");

//looping untuk menunjukan teman
for(let i = 0; i < data.length; i++){
    console.log('friends:', data[i].friends)
}