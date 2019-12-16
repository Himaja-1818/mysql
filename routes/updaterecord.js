var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post('/updaterecord', function(req, res, next) {
    
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
            var sql = `UPDATE customers SET city = '${req.body.city}' WHERE name = '${req.body.name}'`;
             con.query(sql, function (err, result) {
                 if (err) throw err;
                 res.redirect('/');
                 return;
            });
        });
});


module.exports = router;