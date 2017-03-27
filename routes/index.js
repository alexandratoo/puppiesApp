var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  let name = req.body.name;
  console.log(name);
  res.end();
})

module.exports = router;
