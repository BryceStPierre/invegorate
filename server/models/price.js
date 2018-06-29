var request = require('request-promise');

const db = require('../database');
const priceQuery = `SELECT product_name, price_regular, price_sale, unit_id from prices INNER JOIN items ON prices.plant_id = items.id WHERE items.name = $1`;

class Price {

  static retrieveFromAPI (name, postalCode, callback) {
    // const testName = `broccoli`;
    // const testPostalCode = `N8N4T3`;

    request({
      uri: `https://gateflipp.flippback.com/bf/flipp/items/search?locale=en-ca&postal_code=${postalCode}&q=${name}`,
      json: true
    }).then(function (res) {
      callback(null, res);
    }).catch(function (err) {
      console.log(err);
    });
  }

  static retrieveFromCache (name, callback) {
    db.query(priceQuery, [name], function (err, res) {
      if (!err)
        callback(null, res);
    })
  }
}

module.exports = Price;