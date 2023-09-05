const users = require("../json/data.json");


//Fungsi untuk mengganti alamat berdasarkan gender
const changeAddressBasedOnGender = (data) => {
    // Memulai perulangan melalui setiap orang dalam array.
    for (let i = 0; i < data.length; i++) {
      
      // Jika jenis kelamin orang adalah perempuan ('female'), maka alamatnya diganti menjadi 'laut'.
      if (data[i].gender == 'female') {
        data[i].address = 'laut';
      }
      
      // Jika jenis kelamin orang adalah laki-laki ('male'), maka alamatnya diganti menjadi 'gunung'.
      if (data[i].gender == 'male') {
        data[i].address = 'gunung';
      }
    }

    return data;
  };
  
console.log(changeAddressBasedOnGender(users));