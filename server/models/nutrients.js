var request = require('request-promise');

class Nutrients {
  static retrieveByName (name, callback) {
    var query = `${name.split('-').join('%20')}%20cooked`;

    var nutrientURI = `https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=FX0BnN6mw3rW67n7ZApGDdxx1AD9QpxfbZ5rcOpn`
    var nutrients = [
      208, 205, 269, 291, 204,
      203, 318, 320, 404, 406, 
      415, 401, 323, 430, 304,
      315, 305, 306, 255, 303
    ];
    nutrientURI += nutrients.map(n => `&nutrients=${n}`).join("");

    request({
      uri: `https://api.nal.usda.gov/ndb/search/?format=json&q=${query}&sort=r&max=5&ds=Standard%20Reference&api_key=FX0BnN6mw3rW67n7ZApGDdxx1AD9QpxfbZ5rcOpn`,
      json: true
    }).then(function(res) {
      if (res.list.item[0].ndbno) {

        request({
          uri: nutrientURI + `&ndbno=${res.list.item[0].ndbno}`,
          json: true
        }).then(function (res) {
          callback(null, res.report.foods[0]);
        }).catch(function (err) {
          console.log(err);
        });

      }
    }).catch(function (err) {
      console.log(err);
    });
  }
}

module.exports = Nutrients;