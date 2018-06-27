var express = require('express');
var router = express.Router();

var Price = require('../models/price');

router.get('/', function (req, res) {
  Price.retrieveByName('', function (err, price) {

  });
});

module.exports = router;