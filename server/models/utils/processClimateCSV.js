var parse = require('csv-parse');
var _ = require('lodash');

var convertToDecimalDegrees = require('./convertToDecimalDegrees');
var transformClimateNormals = require('./transformClimateNormals');
var trimElevation = require('./trimElevation');

function processClimateCSV (res, callback) {
  var lines = res.split('\n');
  lines.splice(0, 3);            // Trim problematic lines.

  parse(lines.join('\n'), {
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

    lines = res.split('\n');    // Trim problematic lines.
    lines.splice(0, 13);
    lines.splice(1, 1);
    lines.splice(9, 1);

    parse(lines.join('\n'), {
      from: 0,
      to: 19,
      columns: true
    }, function (err, rows) {
      data.normals = transformClimateNormals(rows);
      callback(null, data);
    });
  });
}

module.exports = processClimateCSV;