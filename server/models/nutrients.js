var request = require('request-promise');

const key = `FX0BnN6mw3rW67n7ZApGDdxx1AD9QpxfbZ5rcOpn`;
const nutrientCodes = [
  208, 205, 269, 291, 204, 203, 318, 320, 404, 406, 
  415, 401, 323, 430, 304, 315, 305, 306, 255, 303
];

class Nutrients {
  static retrieveByName (name, state, callback) {
    var query = `${name.split('-').join('%20')}%20${state}`;

    request({
      uri: `https://api.nal.usda.gov/ndb/search/?format=json&q=${query}&sort=r&max=5&ds=Standard%20Reference&api_key=${key}`,
      json: true
    }).then(function (res) {
      if (!res.list.item[0].ndbno)
        return callback({ error: 'Failed to retrieve food id number.' });

      var uri = `https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=${key}`
        + nutrientCodes.map(n => `&nutrients=${n}`).join('')
        + `&ndbno=${res.list.item[0].ndbno}`;

      request({
        uri: uri,
        json: true
      }).then(function (res) {
        if (!res.report.foods[0])
          return callback({ error: 'Failed to retrieve nutrients for first result.' })
        callback(res.report.foods[0]);
      }).catch(function (err) {
        console.log(err);
        callback({ error: `Failed to retrieve nutrients list.` });
      });

    }).catch(function (err) {
      console.log(err);
      callback({ error: 'Failed to retrieve food list.' });
    });
  }
}

module.exports = Nutrients;