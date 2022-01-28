var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yuliia1234",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});