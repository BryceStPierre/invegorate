var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC63yhUqQLPXp0Af_Irf8Hx9LsJfwMIUD8'
});

class Location {
  static retrieveByAddress (address, callback) {
    googleMapsClient.geocode({
      address: address
    }, function(err, response) {
      if (err)
        console.log(err);

      var postalCode = response.json.results[0].address_components.filter(o => {
        return o.types.includes('postal_code');
      })[0].long_name;

      callback(err, postalCode);
    });
  }

  static retrieveByLatLng (latitude, longitude, callback) {
    googleMapsClient.reverseGeocode({
      latlng: [latitude, longitude]
    }, function(err, response) {
      if (err)
        console.log(err);

      var postalCode = response.json.results[0].address_components.filter(o => {
        return o.types.includes('postal_code');
      })[0].long_name;

      callback(err, postalCode);
    });
  }

  static retrievePlacesByName (input, callback) {
    googleMapsClient.placesAutoComplete({
      input: input,
      sessiontoken: ""
    }, function (err, response) {
      if (err)
        console.log(err);
      callback(err, response.json.predictions);
    });
  }
}

module.exports = Location;