var express = require('express');
var router = express.Router();

var Nutrients = require('../models/nutrients');

// Example usage:
// 
// /api/nutrients/broccoli
router.get('/:name', function (req, res) {
  Nutrients.retrieveByName(req.params.name, function (err, nutrients) {
    if (err)
      return res.json(err);
    return res.json(nutrients);
  });
});

module.exports = router;