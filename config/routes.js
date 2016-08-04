// var app = require('express')();
var router = function(app) {
  app.get('/', function(req, res) {
    res.render('../app/views/index')
  })
}

module.exports = router;
