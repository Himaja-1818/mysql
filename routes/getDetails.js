var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getDetails', function(req, res, next) {
  res.render('getDetails', { title: 'Express' });
});

module.exports = router;
