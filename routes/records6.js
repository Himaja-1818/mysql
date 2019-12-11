var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/records3', function(req, res, next) {
    
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

console.log('result lenngh',result.length);
console.log(req.body);
if(result.length>0)
{
    console.log("already exist");
    res.send('Record already exists');
    return;
}
else{
      collection.insertOne(req.body,function(err, result) {
          if (err) throw err;
  
          db.close();
          res.redirect('/');
          return;
      });
  };

});
});

});

module.exports = router;