var request = require('request-promise');

class Price {

  static retrieveByName (name, location, callback) {

    const testName = `broccoli`;
    const testPostalCode = `N8N4T3`;

    request({
      uri: `https://gateflipp.flippback.com/bf/flipp/items/search?locale=en-ca&postal_code=${testPostalCode}&q=${testName}`,
      json: true
    }).then(function (res) {
      callback(null, res);
    }).catch(function (err) {
      console.log(err);
    });
  } 

  static retrieveFromAPI () {

  }

  static retrieveFromCache () {

  }
}

module.exports = Price;