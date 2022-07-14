require('dotenv').config();
const mysql = require('mysql');
const connections = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   database:'supermarket'
});
// proccess.env.MYSQLHOST,
// proccess.env.MYSQLUSER,
// proccess.env.MYSQLPASSWORD,
// proccess.env.MYSQLDATABASE

connections.connect( err =>{
    if(!err) {
        console.log('Connection stablished');
    }
    else{
        console.log('Failed to Connect');
    }
}
)
module.exports= connections;