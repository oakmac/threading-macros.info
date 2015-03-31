// NOTE: this file exists for developer convenience to run a web server
// out of the /public directory

var express = require('express');

// create express app
var app = express();

// serve static files
app.use(express.static('public/'));

app.listen(7778);
console.log('Web server listening on port 7778');
