var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET users listing. */
router.get('/:name', function(req, res, next) {
    var name = req.params.name;
    knex('posts')
        .innerJoin('users', 'posts.user_id', 'users.id')
        .where('users.name', name)
        .select('posts.photo', 'posts.title', 'posts.body', 'posts.created_at', 'users.name')
        .then(data => {
            res.render('users', {
                data: data,
                name: name
            });
            // res.end();
        })
});

router.post('/:name', (req, res, next) => {
    var name = req.params.name
    let title = req.body.title
    let url = req.body.url
    let body = req.body.body
    knex('users')
        // .innerJoin('users', 'posts.user_id', 'users.id')
        .where('users.name', name)
        .limit(1)
        .then(data => {
            console.log(data, 'data');
            return knex('posts')
                .insert({
                    title: title,
                    photo: url,
                    body: body,
                    user_id: data[0].id
                }, '*')
                .then(data => {
                  console.log(data,'succesful insert into post?');
                    res.redirect(`../users/${name}`);
                })

        })
})

module.exports = router;
