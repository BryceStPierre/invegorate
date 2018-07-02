const db = require('../database');

const query = `SELECT items.name_formatted, items.name_species, categories.label as category from items INNER JOIN categories ON items.category_id = categories.id WHERE items.name = $1`;

class Item {
  static retrieveByName (name, callback) {
    db.query(query, [name], function (err, res) {
      if (err.error)
        return callback(err);
      callback(res.length > 0 ? res[0] : null); // Returns the first result.
    });
  }
}

module.exports = Item;