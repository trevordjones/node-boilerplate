var express = require('express');
var app = express();
var mongoose = require('mongoose');
var flash = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

app.use(express.static(__dirname + '/app'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'jade');

var routes = require('./config/routes')
routes(app);

app.listen(9000, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.log("listening on port 9000")
})
