const express = require('express')
const mongoose = require('mongoose')
const app=express()
const path = require('path')
const bodyParser = require('body-parser').urlencoded(
    {
      extended:true
    }
) 
const userSchema=mongoose.Schema({
    name:String,
    age:Number
})
const User=mongoose.model('user',userSchema)
app.set('view engine','ejs') //moteur pour content dynamic
app.set('views','cr') // folder of ejs file


app.use(express.static(path.join(__dirname,'g')))
app.get('/d',(req,res,next)=>{
    mongoose.connect('mongodb://localhost:27017' ,(err)=>{
        console.log("connect")
       
    })
   res.send("hi there")
})
app.listen(8000,()=>{
    console.log("hi ")
})