// Dependancies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var logger = require("morgan");

// Fire up Express
var app = express();
var mongoose = require(mongoose);

// Public directory
app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 3000;

// Database require
require("./config/connection");

// Morgan logging
app.use(logger("dev"));

// Body Parser settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars setup
// Oh great holy handlebars
var expressHandlebars = require("express-handlebars");
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Hot Routes
var routes = require("./controllers/news.js");
app.use('/', routes);

// Port master flex
app.listen(port, function() {
	console.log("Listening on port: " + port);
});