var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/record', function(req, res, next) {
    
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

con.connect(function(err) {
  if (err){
    console.log(err);
    return;
  }
  
  console.log("Connected!");
  con.query("SELECT * FROM `customers`", function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated"); 
     res.render('recordsview',{
        result1:result,
        length:result.length
    })
  });
  });
});

module.exports = router;