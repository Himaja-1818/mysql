var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/records2', function(req, res, next) {
    
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
  var sql = "SELECT * FROM customers LIMIT 7";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result); 
      res.render('recordsview',{
        result1:result,
        length:result.length
    })
  });
  });
});

module.exports = router;