var express = require('express');
var https = require('https');
var router = express.Router();

var key = '2d13bb23-9bde-4668-82a0-2c0615eb6a92'

router.get('/', function(req, res, next) {
  res.render('index', { title: 'StatsGetter' });
});


router.get('/stats', function(req, res, next) {

  https.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/RiotSchmick?api_key=' + key, function(response, err) {
    
    if (err) { console.log(err) }

    var data = '';

    response.on('data', function(stream){
      data += stream
    })

    response.on('end', function(){
      res.end(data);
    })
    
  })


})

module.exports = router;