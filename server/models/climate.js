var request = require('request-promise');
var parse = require('csv-parse');

class Climate {
  static retrieveByName (name, callback) {

    request({
      uri: `http://climate.weather.gc.ca/climate_normals/bulk_data_e.html?ffmt=csv&lang=e&prov=ON&yr=1981&stnID=4607&climateID=6130257+++++++++++++&submit=Download+Data`
    }).then(function (res) {

      // Trim header lines and problematic lines.
      var lines = res.split('\n');
      // lines.splice(0, 13);
      // lines.splice(1, 1);
      // lines.splice(9, 1);

      lines.splice(0, 3);


      parse(lines.join('\n'), {
        from: 0,
        to: 1,
        columns: true
      }, function (err, output) {
        if (err)
          console.log(err);
        callback(null, output);
      });



      // parse(lines.join('\n'), {
      //   from: 0,
      //   to: 19,
      //   columns: true
      // }, function (err, output) {
      //   if (err)
      //     console.log(err);
      //   callback(null, output);
      // });

    }).catch(function (err) {
      console.log(err);
    });
  }
}

module.exports = Climate;