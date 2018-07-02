var express = require('express');
var router = express.Router();

var Price = require('../models/price');

// Example usage:
// /api/price/broccoli?postal=N8N4T3
router.get('/:name', function (req, res) {
  if (!req.params.name)
    return res.json({ error: 'Incorrect API usage: name missing.' });

  Price.retrieveByName(req.params.name, req.query.postal, function (price) {
    res.json(price);
  });
});

// Example usage:
// /api/price/item/287646236
router.get('/item/:id', function (req, res) {
  if (!req.params.id)
    return res.json({ error: 'Incorrect API usage: id missing.' });

  Price.retrieveById(req.params.id, function (price) {
    res.json(price);
  });
});

module.exports = router;