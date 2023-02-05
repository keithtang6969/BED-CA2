/*
Name: Tang Zheng Yin Keith
Admission Number: 2228002
Class: DIT/FT/1B/03
ST0503 BACK-END WEB DEVELOPMENT
2022/2023 SEMESTER 2
ASSIGNMENT 2 SOURCE CODE
*/

var db = require('./databaseConfig.js');

var film = {
    searchByTitle: function (search, max, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }

            else {
                console.log(`Search for DVD: ${search}, Max: ${max}`);

                search = `${search}%`;

                if (max == '') {
                    max = 9.99;
                }
                max = parseFloat(max);

                var sql = 'SELECT * FROM film_list WHERE title LIKE ? AND price <= ?';

                conn.query(sql, [search, max], function (err, result) {
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }

                    else {
                        return callback(null, result);
                    }
                })
            }
        })
    },

    accessDVD: function (film_id, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }

            else {
                console.log(`Access film details: #${film_id}`);

                var sql = 'SELECT * FROM film_list WHERE FID = ?';

                conn.query(sql, [film_id], function (err, result) {
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }
                    else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            }
        });
    },

    searchByCategory: function (category, max, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }

            else {
                console.log(`Search for DVD with category: ${category}, Max: ${max}`);

                if (max == '') {
                    max = 9.99;
                }
                max = parseFloat(max);

                var sql = 'SELECT * FROM film_list WHERE category = ? AND price <= ?';

                conn.query(sql, [category, max], function (err, result) {
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
    },

    searchByTitleAndCategory: function (search, category, max, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }

            else {
                console.log(`Search By Title: ${search}, Category: ${category}, Max: ${max}`);

                search = `${search}%`;

                if (max == '') {
                    max = 9.99;
                }
                max = parseFloat(max);

                var sql = 'SELECT * FROM film_list WHERE title LIKE ? AND category = ? AND price <= ?'

                conn.query(sql, [search, category, max], function(err, result) {
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    }

                    else {
                        console.log(result);
                        return callback(null, result);
                    }
                });
            }
        });
    }
}

module.exports = film;