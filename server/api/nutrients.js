var express = require('express');
var router = express.Router();

var Nutrients = require('../models/nutrients');

// Example usage:
// /api/nutrients/broccoli?state=raw
router.get('/:name', function (req, res) {
  if (!req.params.name)
    return res.json({ error: 'Incorrect API usage: name missing.' });
    
  var state = req.query.state ? req.query.state : 'raw';
  Nutrients.retrieveByName(req.params.name, state, function (nutrients) {
    res.json(nutrients);
  });
});

module.exports = router;