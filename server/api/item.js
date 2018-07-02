var express = require('express');
var router = express.Router();

var Item = require('../models/item');

// Example usage:
// /api/item/broccoli
router.get('/:name', function (req, res) {
  if (!req.params.name)
    return res.json({ error: 'Incorrect API usage: missing name.' });

  Item.retrieveByName(req.params.name, function (item) {
    res.json(item);
  });
});

module.exports = router;