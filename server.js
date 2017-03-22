var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var request = require("request");
var cheerio = require("cheerio");

mongoose.Promise = Promise;


// Initialize Express
var app = express();

function generateUrls(limit) {
  var url = 'http://localyellowpages.com/listing/';
  var urls = [];
  var i;
  for (i=1; i < limit; i++) {
    urls.push(url + i);
  }
  return urls;
}


var html = '<div><ul><li>1</li><li id="mynum">2</li><li>3</li></ul></div>';
var $ = cheerio.load(html);
// get my number
var mynum = $('#notes').text();
console.log(mynum)
// Use morgan and body parser with our app

app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

app.listen(3000, function() {
  console.log("App running on port 3000!");
});	