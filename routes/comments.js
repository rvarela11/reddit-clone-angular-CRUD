var express = require('express'),
  router = express.Router(),
  knex = require("../db/knex");

router.get('/post/:id', function(req, res, next) {
  var id = req.params.id;
  knex('comments').where('post_id', '=', id).then(function(info) {
    res.json(info);
  });
});

router.post('/', function(req, res) {
  knex('comments').insert({
    author: req.body.author,
    comment: req.body.comment,
    post_id: parseInt(req.body.post_id)
  }).then(function(msg) {
    res.json(msg);
  });
});

router.put('/:id', function(req, res) {
  knex('comments').where({
    id: req.params.id
  }).update({
    author: req.body.author,
    comment: req.body.comment,
    post_id: parseInt(req.body.post_id)
  }).then(function(msg) {
    res.json(msg);
  });
});

router.delete('/:id', function(req, res) {
  knex('comments').where({
    id: req.params.id
  }).del().then(function(msg) {
    res.json(msg);
  });
});

module.exports = router;
