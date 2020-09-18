const express = require('express');
const mongodb = require('mongodb').MongoClient;
const app=express()
mongodb.connect('mongodb://localhost:27017',(e,res)=>{
     res.db('pro')
     res.close()
});
app.get('/kjh',(req,res)=>{
  

    console.log("fddffd")
})

app.listen(8000,()=>{
    console.log("hi there")
})