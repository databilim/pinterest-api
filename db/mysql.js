const mysql = require("mysql");
 


 
var db  = mysql.createPool({
  connectionLimit : 10,
  host            : '173.212.203.208',
  user            : 'admin_icerik',
  password        : 'Cx9544Cx',
  database        : 'admin_icerik',
  charset         : "utf8mb4",
});


module.exports = db;