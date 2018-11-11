var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dti',
  password : 'incubator',
  database : 'dti'
});

connection.connect();

connection.query('SELECT name, description from Project', function (error, results, fields) {
  if (error) throw error;
  var names = [];
  var descriptions = [];
  for (var i in results){
      names.push(results[i].name);
      descriptions.push(results[i].description);
  }
  console.log(names, descriptions);
});

connection.end();
