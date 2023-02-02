var db = require('./databaseConfig.js');

var user = {
    searchDVD: function (search, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }

            else {
                console.log(`Search for DVD: ${search}`);

                var sql = `SELECT title from film WHERE title LIKE '${search}%'`;

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
    }
}

module.exports = user;