var request = require('request-promise');
var cheerio = require('cheerio');

var convertToDMS = require('./utils/convertToDMS');
var processClimateCSV = require('./utils/processClimateCSV');

class Climate {
  static retrieveByCoordinates (latitude, longitude, callback) {
    var lat = convertToDMS(latitude);
    var long = convertToDMS(longitude);

    request({
      uri: `http://climate.weather.gc.ca/climate_normals/station_select_1981_2010_e.html?searchType=stnProx&txtRadius=25&optProxType=custom`
        + `&txtCentralLatDeg=${lat.degrees}&txtCentralLatMin=${lat.minutes}&txtCentralLatSec=${lat.seconds}`
        + `&txtCentralLongDeg=${long.degrees}&txtCentralLongMin=${long.minutes}&txtCentralLongSec=${long.seconds}`,
      transform: body => cheerio.load(body)
    }).then(function ($) {
      var stationId = Number($('table tbody').children().first().find('a').attr('href').split('stnID=')[1].split('&')[0]);
      var province = $('table tbody').children().first().children().eq(1).text().trim();

      const climateId = 6130257;

      request({
        uri: `http://climate.weather.gc.ca/climate_normals/bulk_data_e.html?ffmt=csv&lang=e&prov=${province}&yr=1981&stnID=${stationId}&climateID=${climateId}+++++++++++++&submit=Download+Data`
      }).then(function (res) {
        processClimateCSV(res, callback);
      }).catch(function (err) {
        console.log(err);
      });
    });
  }
}

module.exports = Climate;