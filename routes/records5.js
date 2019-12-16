var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/records5', function(req, res, next) {
    
  const no_of_records_per_page = 10;
  const skipValue = parseInt(req.query.skipValue)
 // const offset1 = (pageno-1) * no_of_records_per_page; 
  const offset = parseInt( req.query.offset);
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

con.connect(function(err) {
  if (err)
  {
    console.log(err);
    return;
  }
    console.log("Connected!");
  con.query("SELECT * FROM `customers`", function (err, result1) {
    if (err) throw err;
    //console.log(`SELECT * FROM customers LIMIT  ${no_of_records_per_page} OFFSET ${skipValue}`);
      con.query(  `SELECT * FROM customers LIMIT  ${no_of_records_per_page} OFFSET ${skipValue * no_of_records_per_page}` ,function (err, result2) {
      if (err) throw err;
       console.log(result2.length);
       console.log(result1.length/no_of_records_per_page);
       console.log(result1.length);
       
       res.render('records5view',{
        result1:result2,
       page:Math.ceil(result1.length/no_of_records_per_page),
        length:result2.length
        });
        
      
      })
    });
 });
});
module.exports = router;
