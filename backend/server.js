/*
Name: Tang Zheng Yin Keith
Admission Number: 2228002
Class: DIT/FT/1B/03
ST0503 BACK-END WEB DEVELOPMENT
2022/2023 SEMESTER 2
ASSIGNMENT 2 SOURCE CODE
*/

var express = require('express');
var serveStatic = require('serve-static');
var app = require('./controller/app.js');

var hostname = 'localhost';
var port = 8081;

app.use(serveStatic(__dirname + '/public'));

var server = app.listen(port, function () {
    console.log(`Server hosted at http://${hostname}:${port}`);
});