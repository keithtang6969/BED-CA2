var mysql = require('mysql');

var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root1234",
            database: "bed_dvd_db",
            multipleStatements: true,
        });
        return conn;
    }
};

module.exports = dbconnect