const pac = require("express");
const a=pac.Router();
a.get("/khra",(req,res)=>{
    res.send("zbaaaaaaaaaaaaaaaaaaaaaaal")
})
a.get("/figa",(req,res)=>{
    res.send("figaaaaaaaaaaaaaaaaaaaaaa")
})
a.get("/",(req,res)=>{
    res.send("gaaaaaaaaaaaaaaaaaaaaaa")
})
module.exports=a