var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/delete', function(req, res, next) {

    name = req.query.name;
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
            var sql =`DELETE FROM customers 
            WHERE 
                name IN (
                
                FROM (
                    SELECT 
                        name,
                        ROW_NUMBER() OVER (
                            PARTITION BY age
                            ORDER BY age) AS row_num
                    FROM 
                        customers
                    
                ) t
                WHERE row_num = 1
               )`;
               
            //var sql = `delete from customers  WHERE name = '${req.body.name}'`;
             con.query(sql, function (err, result) {
                 if (err) throw err;
                 res.redirect('/');
                 return;
            });
        });
});


module.exports = router;