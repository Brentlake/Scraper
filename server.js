var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var request = require("request");
var cheerio = require("cheerio");

mongoose.Promise = Promise;


// Initialize Express
var app = express();

// Use morgan and body parser with our app

app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

app.listen(3000, function() {
  console.log("App running on port 3000!");
});	