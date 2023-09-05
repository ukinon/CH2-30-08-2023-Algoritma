const users = require("./data.json");

// 1) tentukan yang tidak memiliki teman bernama irfi dan adella
const checkFriends = (data) => {
    // 1. membuat variable array kosong
    let result = [];
    // 2. looping untuk mengecheck satu satu data
    for (let i = 0; i < data.length; i++) {
        //3. deklarasi variable booelean apakah memiliki irfi atau adella dengan default value false
        let hasIrfiOrAdella = false;
        //4. looping untuk check data friends
        for(let j = 0; j < data[i].friends.length; j++){
            //5. kondisi jika friends bernama irfi dan adella
            if(data[i].friends[j].name === 'Adella' || data[i].friends[j].name === 'Irfi'){
                //6. merubah hasIrfiOrAdella menjadi true 
                hasIrfiOrAdella = true;
            }
        }
        //7. kondisi jika hasIrfiOrAdella memiliki value false
        if(!hasIrfiOrAdella){
            //8. Memasukkan data yang relevan ke dalam result
            result.push(data[i]);
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