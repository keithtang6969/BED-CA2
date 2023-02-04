/*
Name: Tang Zheng Yin Keith
Admission Number: 2228002
Class: DIT/FT/1B/03
ST0503 BACK-END WEB DEVELOPMENT
2022/2023 SEMESTER 2
ASSIGNMENT 2 SOURCE CODE
*/

var mysql = require('mysql');

var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "bed_dvd_root",
            password: "pa$$woRD123",
            database: "bed_dvd_db",
            multipleStatements: true,
        });
        return conn;
    }
};

module.exports = dbconnect