const mysql = require('mysql')

function openConnection() {
  const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'tasks_db',
    port: 3306,
  })

  connection.connect()
  return connection
}

module.exports = {
  openConnection,
}
