var express = require('express');
var router = express.Router();

var Item = require('../models/item');
var Nutrients = require('../models/nutrients');

router.get('/:name', function (req, res) {
  Item.retrieveByName(req.params.name, function (err, item) {
    if (err) 
      res.json(err);
    else
      res.json(item);
  });

  Nutrients.retrieveByName('');
  // if (req.params) {
  //   console.log(req.params.id);
  // }
  // if (req.query) {
  //   console.log(req.query);
  // }
});

module.exports = router;