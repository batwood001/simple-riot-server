var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'StatsGetter' });
});

// change this from stats
router.get('/stats', function(req, res, next) {
  res.end('stats!');
})

module.exports = router;
