var express = require('express');
var router = express.Router();

var Climate = require('../models/climate');

// /api/climate/?latitude=43.675672&longitude=-79.488402
router.get('/', function (req, res) {
  if (req.query.latitude && req.query.longitude) {
    Climate.retrieveByCoordinates(req.query.latitude, req.query.longitude, function (err, climate) {
      res.json(climate);
    });
  }
});

module.exports = router;