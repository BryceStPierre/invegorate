var express = require('express');
var router = express.Router();

var Item = require('../models/item');

router.get('/:name', function (req, res) {
  Item.retrieveByName(req.params.name, function (err, item) {
    if (err) 
      res.json(err);
    else
      res.json(item);
  });
  // if (req.params) {
  //   console.log(req.params.id);
  // }
  // if (req.query) {
  //   console.log(req.query);
  // }
});

module.exports = router;