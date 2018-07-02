var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyC63yhUqQLPXp0Af_Irf8Hx9LsJfwMIUD8'
});

// var postalCode = response.json.results[0].address_components.filter(o => {
//   return o.types.includes('postal_code');
// })[0].long_name;

class Location {
  static retrieveByAddress (address, callback) {
    googleMapsClient.geocode({
      address: address
    }, function(err, response) {
      if (err) {
        console.log(err);
        return callback({ error: 'Geocode API error.' });
      }
      callback(response.json.results[0]);
    });
  }

  static retrieveByLatLng (latitude, longitude, callback) {
    googleMapsClient.reverseGeocode({
      latlng: [latitude, longitude]
    }, function(err, response) {
      if (err) {
        console.log(err);
        return callback({ error: 'Reverse Geocode API error.' });
      }
      callback(response.json.results[0]);
    });
  }

  static retrievePlacesByQuery (query, callback) {
    googleMapsClient.placesAutoComplete({
      input: query,
      sessiontoken: ""
    }, function (err, response) {
      if (err) {
        console.log(err);
        return callback({ error: 'Places API error.' });
      }
      callback(response.json);
    });
  }
}

module.exports = Location;