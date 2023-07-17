var express = require('express');
var serveStatic = require('serve-static');
var app = require('./controller/app.js');

var hostname = 'localhost';
var port = 8081;

app.use(serveStatic(__dirname + '/public'));

var server = app.listen(port, function () {
    console.log(`Server hosted at http://${hostname}:${port}`);
});