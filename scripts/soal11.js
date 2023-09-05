const users = require("../json/data.json");

// 1) tentukan yang memiliki teman bernama grace dan buah fav nya apple atau banana
const checkFriendsAndFavFruit = (data) => {
    // 1. membuat variable array kosong
    let result = [];
    // 2. looping untuk mengecheck satu satu data
    for (let i = 0; i < data.length; i++) {
        // 3. looping untuk cek data friends
        for(let j = 0; j < data[i].friends.length; j++){
            //4. kondisi jika memiliki teman bernama grace
            if(data[i].friends[j].name == "Grace"){
                //5. kondisi jika buah fav nya apple atau banana
                if(data[i].favoriteFruit == 'apple' || data[i].favoriteFruit == 'banana'){
                    //6. memasukan data yang relevan ke result
                    result.push(data[i]);
                }        
            }
        }
    }

    return {
        data: result,
        totalData: result.length
    };
}

//deklarasi variable untuk mengambil return value dari function di atas
let data = checkFriendsAndFavFruit(users).data;
let totalData = checkFriendsAndFavFruit(users).totalData;

//memanggil function
console.log(data, "\n==============\n jumlah data: ", totalData, "\n");

//looping untuk menunjukan teman
for(let i = 0; i < data.length; i++){
    console.log('friends:', data[i].friends)
}