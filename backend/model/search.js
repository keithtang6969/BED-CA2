/*
Name: Tang Zheng Yin Keith
Admission Number: 2228002
Class: DIT/FT/1B/03
ST0503 BACK-END WEB DEVELOPMENT
2022/2023 SEMESTER 2
ASSIGNMENT 2 SOURCE CODE
*/

var db = require('./databaseConfig.js');

var search = {
    displayCategories: function (callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }

            else {
                var sql = 'SELECT name FROM category';
                conn.query(sql, function (err, result) {
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }

                    else {
                        return callback(null, result);
                    }
                });
            }
        });
    }
}

module.exports = search;