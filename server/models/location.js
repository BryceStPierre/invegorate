var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC63yhUqQLPXp0Af_Irf8Hx9LsJfwMIUD8'
});

class Location {

  static retrieveByAddress (address, callback) {
    googleMapsClient.geocode({
      address: ''
    }, function(err, response) {
      if (err)
        console.log(err);

        var postalCode = response.json.results[0].address_components.filter(o => {
          return o.types.includes('postal_code');
        })[0].long_name;
    });
  }

  static retrieveByLatLng (latitude, longitude, callback) {
    googleMapsClient.reverseGeocode({
      latlng: [45.5016889, -73.56725599999999]
    }, function(err, response) {
      if (err)
        console.log(err);

      var postalCode = response.json.results[0].address_components.filter(o => {
        return o.types.includes('postal_code');
      })[0].long_name;

      callback(err, postalCode);
      // res.json(postalCode);
    });
  }

  static retrievePlacesByName (input, callback) {
    googleMapsClient.placesAutoComplete({
      input: input
    }, function (err, response) {
      if (err)
        console.log(err);

      callback(err, response);
    });
  }
}

module.exports = Location;