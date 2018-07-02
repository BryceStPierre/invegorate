var request = require('request-promise');

const db = require('../database');

const query = `SELECT product_name, price_regular, price_sale, unit_id from prices INNER JOIN items ON prices.plant_id = items.id WHERE items.name = $1`;

class Price {
  static retrieveByName (name, postal, callback) {
    if (postal)
      this.retrieveFromAPI(name, postal, callback);
    else
      this.retrieveFromCache(name, callback);
  }
  
  static retrieveById (id, callback) {
    request({
      uri: `https://gateflipp.flippback.com/bf/flipp/items/${id}?locale=en-ca`,
      json: true
    }).then(function (res) {
      callback(res.item);
    }).catch(function (err) {
      console.log(err);
      callback({ error: 'Failed to retrieve item results.' });
    });
  }

  static retrieveFromAPI (name, postal, callback) {
    request({
      uri: `https://gateflipp.flippback.com/bf/flipp/items/search?locale=en-ca&q=${name}&postal_code=${postal}`,
      json: true
    }).then(function (res) {
      callback(res.items);
    }).catch(function (err) {
      console.log(err);
      callback({ error: 'Failed to retrieve search results.' });
    });
  }

  static retrieveFromCache (name, callback) {
    db.query(query, [name], function (err, res) {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Price;