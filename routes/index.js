var express = require('express');
var router = express.Router();
var counter = require('../counter.js');
var random = require('../random.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  random.resetandom();
  counter.reset();
  res.render('index');
});

module.exports = router;
