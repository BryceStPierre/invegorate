var express = require('express');
var router = express.Router();

var Price = require('../models/price');

router.get('/:name', function (req, res) {
  if (req.query.postal) {
    Price.retrieveFromAPI(req.params.name, req.query.postal, function (err, price) {
      res.json(price);
    });
  } else {
    Price.retrieveFromCache(req.params.name, function (err, price) {
      res.json(price);
    });
  }
});

module.exports = router;