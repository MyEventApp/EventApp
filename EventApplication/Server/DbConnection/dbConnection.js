var sql = require('mssql');
var config = {
    server:"salesuat",
    user: 'engage_user',
    password: 'Engage@123',
    database: 'EventAppDB',
    port:'1433'
  }

  var pool = new sql.ConnectionPool(config, function(err) {

      console.log('connection to pool');
  });

module.exports = pool;
