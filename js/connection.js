// let mysql = require('mysql');

// let connection = mysql.createConnection({
//     host:        'localhost',
//     user:        'root',
//     password:    '',
//     database:    'be-2-jakarta-27-main'
//   });
 
const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "be-2-jakarta-27-main"
})

module.exports = db

// connection.connect(function(error){
//     if(!!error){
//       console.log(error);
//     }else{
//       console.log('Koneksi Berhasil!');
//     }
//   })
 

//   module.exports = connection; 