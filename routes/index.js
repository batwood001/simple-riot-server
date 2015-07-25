var express = require('express');
var riotAPI = require('../HTTP_helpers/riot_api');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'StatsGetter' });
});

router.get('/stats', function(req, res, next) {

  riotAPI.getSummonerStatsByName('Blogtastic', function(data){
    res.end(data)
  })

})

module.exports = router;