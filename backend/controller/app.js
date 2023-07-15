/*
Name: Tang Zheng Yin Keith
Admission Number: 2228002
Class: DIT/FT/1B/03
ST0503 BACK-END WEB DEVELOPMENT
2022/2023 SEMESTER 2
ASSIGNMENT 2 SOURCE CODE
*/

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
var film = require('../model/film');
var search = require('../model/search');

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
            res.status(500).send(err);
        }

        else {
            res.status(200).send(result);
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
            res.status(500).send(err);
        }

        else {
            res.status(200).send(result);
        }

    });
});

//Add new DVD (Administrator only)
app.post('/admin/DVD', verifyToken, function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var category = req.body.category;
    var price = req.body.price;
    var length = req.body.length;
    var rating = req.body.rating;
    var actors = req.body.actors;
    var release = req.body.release;
    var image = req.body.image;

});

app.get('/films', function (req, res) {
    var search = req.query.search;
    var max = req.query.max;

    film.searchByTitle(search, max, function (err, result) {
        if (err) {
            res.status(500).send(err);
        }

        else {
            res.status(200).send(result);
        }
    });
});

app.get('/film', function (req, res) {
    var film_id = req.query.film_id;

    film.accessDVD(film_id, function (err, film) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(film);
        }
    });
});

app.get('/categories', function (req, res) {
    search.displayCategories(function (err, result) {
        if (err) {
            res.status(500).send(err);
        }

        else {
            res.status(200).send(result)
        }
    });
});

app.get('/film/category', function (req, res) {
    var category = req.query.category;
    var max = req.query.max;

    film.searchByCategory(category, max, function (err, result) {
        if (err) {
            res.status(500).send(err);
        }

        else {
            res.status(200).send(result);
        }
    });
});

app.get('/emailDuplicateCheck', function (req, res) {
    var email = req.query.email;

    admin.emailDuplicateCheck(email, function (err, result) {
        if (err) {
            res.status(500).send(err);
        }

        else {
            res.status(200).send(result);
        }
    });
})

app.get('/search/title/category', function (req, res) {
    var search = req.query.search;
    var category = req.query.category;
    var max = req.query.max;

    film.searchByTitleAndCategory(search, category, max, function (err, result) {
        if (err) {
            res.status(500).send(err);
        }

        else {
            res.status(200).send(result);
        }
    })
});
module.exports = app;