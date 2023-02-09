
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost', // your host name
    user: 'root', // db user name
    password:'jay@123', // db password
    database: 'notes', // db name
  });
  
connection.connect(function(err) {
  if (err) throw err;
  console.log("database Connected!");
  const sql = "CREATE TABLE notebook(id int NOT NULL AUTO_INCREMENT, title VARCHAR(255), description VARCHAR(255), date VARCHAR(255),PRIMARY KEY (id))";
  connection.query(sql, function (err, result) {
        if (err){
          console.log("table allready exist")
        }else{
          console.log("Table created !");
        }

  });
});

module.exports = {
    connection : connection,
}
