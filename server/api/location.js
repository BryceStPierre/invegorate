var express = require('express');
var router = express.Router();

var Location = require('../models/location');

// Example usage:
// 
// /api/location/?address=1548%20Community%20Crescent%20Windsor%20ON%20Canada
// /api/location/?latitude=43.675672&longitude=-79.488402
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

// Example usage:
// 
// /api/location/places/1548%20Community%20Crescent
router.get('/places/:name', function (req, res) {
  if (req.params.name) {
    Location.retrievePlacesByName(req.params.name, function (err, places) {
      if (!err)
        res.json(places);
    })
  }
});

module.exports = router;