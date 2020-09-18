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
app.get('/',(req,res,next)=>{
    res.render('i');
})
app.get('/d',(req,res,next)=>{
    res.render('d');
})
app.post('/d',bodyParser,(req,res,next)=>{
    mongoose.connect('mongodb://localhost:27017' ,(err1)=>{
        User.deleteOne({name:req.body.name},()=>{
            res.redirect('/list')
               mongoose.disconnect()
        })
     
      
    })
})
app.post('/list',bodyParser,(req,res,next)=>{
    mongoose.connect('mongodb://localhost:27017' ,(err1)=>{
        User.updateOne({name:req.body.name},{age:req.body.age},()=>{
            res.redirect('/list')
               mongoose.disconnect()
        })
     
      
    })
})
app.get('/list',(req,res,next)=>{
    mongoose.connect('mongodb://localhost:27017' ,(err1)=>{
        User.find((err,u)=>{
            res.render('e',{
                user:u
            })
            mongoose.disconnect()
        })
       /* User.find({
           _id:""
       },..) 
        User.findById("5f57c35d342f7f0b6c888359",(err,u)=>{
            res.render('e',{
                user:u
            })
        }) */
    })
})
app.post('/',bodyParser,(req,res,next)=>{
    mongoose.connect('mongodb://localhost:27017' ,(err)=>{
        let n=new User({
            name:req.body.name,
            age:req.body.age
        })
        n.save((err,result)=>{
           
            res.redirect('/')
            mongoose.disconnect()
        })
       /*  User.findOne({name:req.body.name},(err,u)=>{
            n.age=u.age
            mongoose.disconnect()
        }) */
      
    })
  
})
app.listen(8000,()=>{
    console.log("hi ")
})