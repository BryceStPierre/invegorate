var request = require('request-promise');
var parse = require('csv-parse');

var convertToDecimalDegrees = require('./utils/convertToDecimalDegrees');
var trimElevation = require('./utils/trimElevation');

class Climate {
  static retrieveByName (name, callback) {
    var data = {};

    var climateFields = [
      "dailyAvgTemp",
      "stdDev",
      "dailyMaxTemp",
      "dailyMinTemp",
      "extremeMaxTemp",
      "extremeMinTemp",
      "rainfall",
      "snowfall",
      "precipitation",
      "extremeDailyRainfall",
      "extremeDailySnowfall",
      "extremeDailyPrecipitation",
      "extremeDailySnowDepth"
    ];

    request({
      uri: `http://climate.weather.gc.ca/climate_normals/bulk_data_e.html?ffmt=csv&lang=e&prov=ON&yr=1981&stnID=4607&climateID=6130257+++++++++++++&submit=Download+Data`
    }).then(function (res) {
      
      var header = res.split('\n');
      header.splice(0, 3);            // Trim problematic lines.

      parse(header.join('\n'), {
        from: 0,
        to: 1,
        columns: true
      }, function (err, h) {
        // Set data object fields.
        //console.log(h);
        data.station = h[0].STATION_NAME;
        data.province = h[0].PROVINCE;
        data.latlng = [
          convertToDecimalDegrees(h[0].LATITUDE), 
          convertToDecimalDegrees(h[0].LONGITUDE)
        ];
        data.elevation = trimElevation(h[0].ELEVATION);
        data.climateId = Number(h[0].CLIMATE_ID);

        var raw = res.split('\n');    // Trim problematic lines.
        raw.splice(0, 13);
        raw.splice(1, 1);
        raw.splice(9, 1);

        parse(raw.join('\n'), {
          from: 0,
          to: 19,
          columns: true
        }, function (err, rows) {
          data.normals = {}; //rows.filter(o => !o[" "].includes("Date"));

          rows.filter(o => !o[" "].includes("Date"))
            .forEach(o => {

            });

          callback(null, data);
        });
      });
    }).catch(function (err) {
      console.log(err);
    });
  }
}

module.exports = Climate;