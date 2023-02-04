var db = require('./databaseConfig.js');

var film = {
    searchDVD: function (search, max, callback) {
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
                        console.log(result);
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
    }
}

module.exports = film;