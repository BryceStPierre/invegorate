const db = require('../database');

const itemQuery = `SELECT items.name_formatted, items.name_species, categories.label as category from items INNER JOIN categories ON items.category_id = categories.id WHERE items.name = $1`;

class Item {
  static retrieveByName (name, callback) {
    db.query(itemQuery, [name], function (err, res) {
      if (err)
        callback({message: 'Not found.'}, res);
      else 
        callback(null, res[0]); //RETURNS THE FIRST ROW.
    });
  }
}

module.exports = Item;