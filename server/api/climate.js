var express = require('express');
var router = express.Router();

var Climate = require('../models/climate');

router.get('/', function (req, res) {
  Climate.retrieveByName('', function (err, climate) {
    res.json(climate);
  });
});

module.exports = router;