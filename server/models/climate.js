var request = require('request-promise');
var parse = require('csv-parse');
var _ = require('lodash');

var convertToDecimalDegrees = require('./utils/convertToDecimalDegrees');
var transformClimateNormals = require('./utils/transformClimateNormals');
var trimElevation = require('./utils/trimElevation');

class Climate {
  static retrieveByName (name, callback) {

    const prov = 'ON';
    const stnId = 4810; //4607
    const climateId = 6130257;

    request({
      uri: `http://climate.weather.gc.ca/climate_normals/bulk_data_e.html?ffmt=csv&lang=e&prov=${prov}&yr=1981&stnID=${stnId}&climateID=${climateId}+++++++++++++&submit=Download+Data`
    }).then(function (res) {
      var header = res.split('\n');
      header.splice(0, 3);            // Trim problematic lines.

      parse(header.join('\n'), {
        from: 0,
        to: 1,
        columns: true
      }, function (err, h) {
        var data = {
          id: Number(h[0].CLIMATE_ID),
          station: _.capitalize(h[0].STATION_NAME),
          province: h[0].PROVINCE,
          latlng: [
            convertToDecimalDegrees(h[0].LATITUDE), 
            convertToDecimalDegrees(h[0].LONGITUDE)
          ],
          elevation: trimElevation(h[0].ELEVATION)
        };

        var raw = res.split('\n');    // Trim problematic lines.
        raw.splice(0, 13);
        raw.splice(1, 1);
        raw.splice(9, 1);

        parse(raw.join('\n'), {
          from: 0,
          to: 19,
          columns: true
        }, function (err, rows) {
          data.normals = transformClimateNormals(rows);
          callback(null, data);
        });
      });
    }).catch(function (err) {
      console.log(err);
    });
  }
}

module.exports = Climate;