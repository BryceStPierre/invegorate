var express = require('express');
var router = express.Router();

var Location = require('../models/location');

router.get('/', function (req, res) {
  if (req.query.address) {
    Location.retrieveByAddress(req.query.address, function (err, postalCode) {
      if (!err)
        res.json(postalCode);
    });
  } else if (req.query.latitude && req.query.longitude) {
    Location.retrieveByLatLng(req.query.latitude, req.query.longitude, function (err, postalCode) {
      if (!err)
        res.json(postalCode);
    });
  }
});

router.get('/places/:name', function (req, res) {
  if (req.params.name) {
    Location.retrievePlacesByName(req.params.name, function (err, places) {
      if (!err)
        res.json(places);
    })
  }
});

module.exports = router;