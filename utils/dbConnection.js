const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodelogin'
});

module.exports = dbConnection.promise();

//Developer EfeSoroglu ❤