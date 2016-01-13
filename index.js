'use strict';
var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/'));
server.listen(2828);
console.log('App listening on port 2828');

// web server
app.use('/*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
