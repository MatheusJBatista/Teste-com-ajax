var mysql = require('mysql');

var pool = function () {
  return mysql.createPool({
    user: '',
    password: '',
    host: '',
    database: 'NODEAJAX'
  })
}

module.exports = function () {
  return pool
}
