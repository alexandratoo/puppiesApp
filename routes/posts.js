var express = require('express');
var router = express.Router();
const knex = require('../knex')

/* GET home page. */
router.get('/:name', function(req, res, next) {
  let name = req.params.name;
  knex('posts')
  .then(data => {
    res.render('posts', {puppies: data, name: name});
  })
});


module.exports = router;
