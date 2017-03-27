var express = require('express');
var router = express.Router();
const knex = require('../knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('posts')
  .then(data => {
    console.log(data)
    res.render('posts', {puppies: data});
  })
});


module.exports = router;
