var mysql = require('mysql');

var dbConfig = {
	host: '52.195.2.5',
  port: '3306',
  user: 'ubuntu',
  password: 'masaosama',
  database: 'quiz'
};

var connection = mysql.createConnection(dbConfig);

module.exports = connection;
