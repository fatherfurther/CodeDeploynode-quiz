var mysql = require('mysql');

var dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: 'masaosama',
  database: 'quiz'
};

var connection = mysql.createConnection(dbConfig);

module.exports = connection;