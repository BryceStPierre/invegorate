var express = require('express');
var router = express.Router();

var Climate = require('../models/climate');

// Example usage:
// /api/climate/?latitude=43.675672&longitude=-79.488402
router.get('/', function (req, res) {
  if (!req.query.latitude || !req.query.longitude)
    return res.json({ error: 'Incorrect API usage: location missing or incomplete.' });

  Climate.retrieveByCoordinates(req.query.latitude, req.query.longitude, function (climate) {
    res.json(climate);
  });
});

module.exports = router;