var express = require('express');
var router = express.Router();

var Item = require('../models/item');

router.get('/:name', function (req, res) {
  Item.retrieveByName(req.params.name, function (err, item) {
    if (err) 
      return res.json(err);
    return res.json(item);
  });
});

module.exports = router;