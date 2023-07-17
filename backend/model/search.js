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