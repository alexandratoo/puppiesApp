var express = require('express');
var router = express.Router();
var knex = require('../knex')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  let name = req.body.name;
  knex('users')
  .insert({ name: name }, '*')
  .then(data => {
    res.redirect(`posts/${name}`);
  })
})

module.exports = router;
