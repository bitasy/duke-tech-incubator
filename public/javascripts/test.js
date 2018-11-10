var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dti',
  password : 'incubator',
  database : 'dti'
});

connection.connect();

connection.query('SELECT * from Person', function (error, results, fields) {
  if (error) throw error;
  console.log('The first person is: ', results[0].netid);
});

connection.end();
