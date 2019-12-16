var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post('/records6', function(req, res, next) {
    
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
  var sql = `SELECT  name FROM customers WHERE name='${req.body.name}'`;
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
  const queryParams = [req.body.name, req.body.age, req.body.gender, req.body.city];
    con.query( "INSERT INTO customers (name, age, gender, city) VALUES (?,?,?,?)", queryParams, function (err, result) {
        if (err) throw err;;

          res.redirect('/');
          return;
      });
  };

});
});

});

module.exports = router;