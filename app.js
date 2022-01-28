console.log("hi");
const fs = require("fs");
fs.readFile('t1.txt', 'utf-8', (err, data) => {
    console.log(data);
});

fs.writeFile('newFile.txt', 'goooooo', (err) => {
    if (err) console.log(err);
});

// const mysql = require('mysql');
// const config  = require("process");


// const conn = mysql.createConnection( config {
//     host: "localhost",
//     user: "",
//     database: "yuliia",
//     password: ""
// });

// conn.connect (options err => {
//     if (err) {
//         console.log(err);
//         return err;
//     }
//     else {
//         console.log('Dattttaaa-----ok')
//     }
// });



