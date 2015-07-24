var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scratch MIDI' });
});


router.get('/poll', function(req, res, next) {
  poll(res);
});

router.get('/reset_all', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  res.send('');
});

function poll(res){
  var values = require('../bin/www').values;
  var velocity = require('../bin/www').velocity;
  var str = "";
  for (var key in values) {
    str += key + " " + values[key] + "\n";
  }
  str += "velocity " + velocity + "\r\n";

  res.setHeader("Content-Type", "text/html; charset=ISO-8859-1");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(str);
}

module.exports = router;
