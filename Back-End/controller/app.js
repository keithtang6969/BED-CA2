var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var verifyToken = require('../auth/verifyToken.js');
var cors = require('cors');
app.options('*', cors());
app.use(cors());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(urlencodedParser);

var admin = require('../model/admin.js');
var user = require('../model/user');

//Administrator Login
app.post('/admin/login', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    admin.login(email, password, function (err, token, result) {
        if (!err) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            delete result[0]['password']; //clear the password in json data, do not send back to client
            console.log(result);
            res.json({ success: true, UserData: JSON.stringify(result), token: token, status: 'You are successfully logged in!' });
            res.send();
        } else {
            res.status(500);
            res.send(err.statusCode);
        }
    });
});

//Add new actor (Administrator only)
app.post('/admin/actor', verifyToken, function (req, res) {
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    admin.addNewActor(first_name, last_name, function (err, result) {
        if (err) {
            res.status(500);
            res.send(err.statuscode);

        }

        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, result: result, status: 'Record updated successfully!' });
        }
    })
});

//Add new customer (Administrator only)
app.post('/admin/customer', verifyToken, function (req, res) {
    var address = req.body.address;
    var store_id = req.body.store_id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;

    admin.addNewCustomer(address.address_line1, address.address_line2, address.district, address.city_id, address.postal_code, address.phone, store_id, first_name, last_name, email, function (err, result) {
        if (err) {
            console.log(err);
        }

        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, result: result, status: 'Record updated successfully!' });
        }

    });
});

//User search
app.get('/home/films', function (req, res) {
    var search = req.query.search;

    user.searchDVD(search, function (err, result) {
        if (err) {
            res.status(500).send(err);
        }

        else {
            res.status(200).send(result);
        }
    });
});

module.exports = app;