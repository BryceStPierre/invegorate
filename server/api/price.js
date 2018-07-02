var express = require('express');
var router = express.Router();

var Price = require('../models/price');

// Example usage:
// /api/price/broccoli?postal=N8N4T3
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