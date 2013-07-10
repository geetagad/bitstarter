var express = require('express');
var data = "";
var fs = require('fs');


var app = express.createServer(express.logger());

data = fs.readFileSync('./index.html','utf8')
//console.log (data);

app.get('/', function(request, response) {
  response.send( data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
