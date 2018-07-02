var express = require('express');
var router = express.Router();

var Location = require('../models/location');

// Example usage:
// /api/location/?address=1548%20Community%20Crescent%20Windsor%20ON%20Canada
// /api/location/?latitude=43.675672&longitude=-79.488402
router.get('/', function (req, res) {
  if (req.query.address) {
    Location.retrieveByAddress(req.query.address, function (result) {
      res.json(result);
    });
  } else if (req.query.latitude && req.query.longitude) {
    Location.retrieveByLatLng(req.query.latitude, req.query.longitude, function (result) {
      res.json(result);
    });
  } else {
    res.json({ error: 'Incorrect API usage.' });
  }
});

// Example usage:
// /api/location/places/1548%20Community%20Crescent
router.get('/places/:query', function (req, res) {
  if (!req.params.query)
    return res.json({ error: 'Incorrect API usage: missing query.' });

  Location.retrievePlacesByQuery(req.params.query, function (places) {
    res.json(places);
  });
});

module.exports = router;