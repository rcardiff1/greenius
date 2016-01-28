var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var jwt = require('express-jwt');

var jwtCheck = jwt({
  secret: new Buffer(process.env.AUTH0_CLIENT_SECRET),
  audience: '909iKBxjdoJbblSUwtwFKFwfkqZss09d'
});

var middleware = require('./config/middleware.js');

middleware(app, express, jwtCheck);

app.listen(port);
console.log('listening on ' + port);
