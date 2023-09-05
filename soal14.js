const users = require("./data.json");

//1. membuat fungsi untuk merubah email dan nama company
const changeEmailAndCompany = (data) => {
    
    //2. loop untuk mengecek setiap data
      for(let i = 0; i < data.length; i++){
        //3. deklarasi variable yang berisi email yang telah terpisah
        const emailParts = data[i].email.split('@');
        //4. deklarasi variable baru yang berbentuk array dan memiliki value seperti emailParts
        let [firstPart, lastPart] = emailParts;
        //5. merubah value lastPart
        lastPart = 'binar.org'; 
        //6. menampilkan hasil emailParts ke konsol
        console.log(emailParts)
        //7. merubah value last part dari setiap email
        data[i].email = `${firstPart}@${lastPart}`
        //8. merubah value dari setiap company
        data[i].company = 'binar'
      }

    return data;
  };
  

  //memanggil fungsi dan menampilkan ke konsol
  console.log(changeEmailAndCompany(users));