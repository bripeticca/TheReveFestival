var express = require('express');
var app = express();

// serve files from the public directory
app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.sendFile(__dirname + '/index.html');
});