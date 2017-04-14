var express = require('express');
var bodyparser = require('body-parser');
var multer = require("multer");
var connection = require('./config/connection');
var page = require('./routes/page');
var upload = require('./routes/upload');

var app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

connection.init();

//routes
app.use('/', page);
app.use('/api/page', page);
app.use('/api/upload', upload);


app.use('*', function(req, res) {
    res.send('<h>Bad route, please try another URL</h>');
});

//Start server
var server = app.listen(8000, function() {
    console.log('Server listening on port ' + server.address().port);
});