var db = require('./databaseConfig.js');

var film = {
    searchDVD: function (search, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }

            else {
                console.log(`Search for DVD: ${search}`);

                search = `${search}%`;

                var sql = 'SELECT * FROM film_list WHERE title LIKE ?';

                conn.query(sql, [search], function (err, result) {
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
}

module.exports = film;