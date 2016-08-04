var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.set('view engine', 'jade');

var routes = require('./config/routes')
routes(app);

app.listen(9000, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.log("listening on port 9000")
})
