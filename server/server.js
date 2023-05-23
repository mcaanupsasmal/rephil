const express=require("express");
const env=require("./config/config")
//database connect get connect obj
const db=require("./config/db");
const cors=require("cors");
const app=express();


app.use(cors());
app.use(express.json()); 

app.get("/all",(req,res)=>{
    const sql="select * from flower_property_master";
    db.query(sql, function (err, result) {
        if (err) throw err;
        //console.log("Result: " + result);
        return res.status(200).json(result)
      });
}) 


const port=env.PORT || 3001;
app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})