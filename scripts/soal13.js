const users = require("../json/data.json");

//1. membuat fungsi untuk menukar nama depan dan belakang
const swapFirstAndLastNames = (data) => {
    
    //2. loop untuk mengecek setiap data
      for(let i = 0; i < data.length; i++){
        //3. deklarasi variable yang berisi nama yang telah terpisah
        const nameParts = data[i].name.split(' ');
        //4. deklarasi variable baru yang berbentuk array dan memiliki value seperti nameParts
        const [firstName, lastName] = nameParts; 
        //5. menampilkan hasil nameParts ke konsol
        console.log(nameParts)
        //6. merubah setiap name menjadi last name dan first name yang tadi telah dideklarasi
        data[i].name = `${lastName} ${firstName}`
      }

    return data;
  };
  

  //memanggil fungsi dan menampilkan ke konsol
  console.log(swapFirstAndLastNames(users));