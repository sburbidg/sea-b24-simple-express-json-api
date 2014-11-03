// took a peek at crenwick's app just to get me started.

"use strict";

var express = require('express');
//var http = require('http');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.json());
var port = (process.env.PORT || 3000);

app.get('/time', function(req, res){
  var c = new Date();
  var data = {
    clock: c,
    hour: c.getHours(),
    minute: c.getMinutes(),
    seconds: c.getSeconds()
  };
  console.log('Date has been stored');
  res.json(data);
});

app.get('/usr/:name', function(req, res){
  var response = {
    message: 'Hey there ' + req.params.name + "!!"
  };
  console.log('Name parameter has been set.');
  res.json(response);
});

app.listen(port);

module.exports = app;
