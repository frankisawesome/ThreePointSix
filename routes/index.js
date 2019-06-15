var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send({response: "You've reached the ThreePointSix API, hit /posts endpoint with a get request for more information"})
});

module.exports = router;
