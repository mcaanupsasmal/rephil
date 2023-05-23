const mysql=require("mysql");
const env=require("./config");
const db=mysql.createConnection({
    host:env.HOST,
    user:env.USER,
    password:env.PASSWORD,
    database:env.DATABASE
   })
   db.connect(function(err) {
    if (err) console.log(err)
    console.log("database connected");
  });

module.exports=db;