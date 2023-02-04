/*
Name: Tang Zheng Yin Keith
Admission Number: 2228002
Class: DIT/FT/1B/03
ST0503 BACK-END WEB DEVELOPMENT
2022/2023 SEMESTER 2
ASSIGNMENT 2 SOURCE CODE
*/

var jwt = require('jsonwebtoken');
var config = require('../config');

function verifyToken(req, res, next) {
    console.log(req.headers);

    //retrieve authorization header's content
    var token = req.headers['authorization'];
    console.log(token);

    //process the token
    if (!token || !token.includes('Bearer')) {
        res.status(403);
        return res.send({ auth: 'false', message: 'Not authorized!' });
    }

    else {
        //obtain the token's value
        token = token.split('Bearer ')[1]; 
        console.log(token);

        jwt.verify(token, config.key, function (err) {
            if (err) {
                res.status(403);
                return res.send({ auth: false, message: 'Not authorized!' });
            }

            else {
                next();
            }
        });
    }
}

module.exports = verifyToken;