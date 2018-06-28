var express = require('express');
var router = express.Router();

var Price = require('../models/price');

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC63yhUqQLPXp0Af_Irf8Hx9LsJfwMIUD8'
});

// router.get('/', function (req, res) {
//   console.log(req.query);
//   res.json({});
// });

router.get('/:name', function (req, res) {
  Price.retrieveByName('', '', function (err, price) {

    console.log(req.query);

    googleMapsClient.reverseGeocode({
      latlng: [45.5016889, -73.56725599999999]
    }, function(err, response) {

      var postalCode = response.json.results[0].address_components.filter(o => {
        return o.types.includes('postal_code');
      })[0].long_name;

      res.json(postalCode);
    });


    // googleMapsClient.geocode({
    //   address: 'Calgary, AB, Canada'
    // }, function(err, response) {
    //   if (!err)
    //     res.json(response.json.results);
    // });
  });
});

module.exports = router;