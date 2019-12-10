var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/records', function(req, res, next) {
    
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
  var sql = "INSERT INTO customers (name, age, gender,city) VALUES ?";
  var values = [
    ['John', '21','male','mexico'],
    ['Peter', '22','male','mumbai'],
    ['Amy', '23','female','chennai'],
    ['Hannah', '24','female','blore'],
    ['Michael', '25','male','blore'],
    ['Sandy', '26','male','pune'],

    ['karthick', '27','male','pune']];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log("Number of records inserted: " + result.affectedRows);
    res.render('recordsview',{
        result1:result,
        length:result.length
    })
  });
  });
});

module.exports = router;