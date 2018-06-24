var request = require('request-promise');

class Nutrients {
  static retrieveByName (name) {

    var query = `broccoli%20cooked`;

    var options = {
      uri: `https://api.nal.usda.gov/ndb/search/?format=json&q=${query}&sort=r&max=5&ds=Standard%20Reference&api_key=FX0BnN6mw3rW67n7ZApGDdxx1AD9QpxfbZ5rcOpn`,
      json: true
    };


    var options2 = {
      uri: `https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=FX0BnN6mw3rW67n7ZApGDdxx1AD9QpxfbZ5rcOpn&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=01009`,
      json: true
    };

    request(options)
      .then(function(res) {
        if (res.list.item[0].ndbno) {
          console.log(res.list.item[0].ndbno);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

module.exports = Nutrients;