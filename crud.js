const express = require('express')
const mongodb = require('mongodb').MongoClient
const ObjectId= require('mongodb').ObjectID
const app=express()
const path = require('path');
const bodyParser = require('body-parser').urlencoded(
    {
      extended:true
    }
) 

app.set('view engine','ejs') //moteur pour content dynamic
app.set('views','cr') // folder of ejs file


app.use(express.static(path.join(__dirname,'g')))

app.get('/home',(req,res)=>{

    res.render('i')
})
app.get('/del',(req,res)=>{

    res.render('d')
})
app.get('/list',bodyParser,(req,res)=>{
    mongodb.connect('mongodb://localhost:27017',{ useUnifiedTopology: true },(e,cl)=>{
        let db=cl.db('access')
        // _id:new ObjectId("5f563ba862f57d0d684e69aa")
        db.collection('user').find({}).toArray().then((q)=>{
            res.render('e',{
                user:q
            })
           
        })
       
   })
    
})
app.post('/del',bodyParser,(req,res)=>{
    mongodb.connect('mongodb://localhost:27017',{ useUnifiedTopology: true },(e,cl)=>{
        let db=cl.db('access')
        db.collection('user').deleteOne({name:req.body.name}).then(()=>{
            res.redirect('/list')
           
        })
       
    })
    
})
app.post('/list',bodyParser,(req,res)=>{
    mongodb.connect('mongodb://localhost:27017',{ useUnifiedTopology: true },(e,cl)=>{
        let db=cl.db('access')
        db.collection('user').updateOne({name:req.body.name},{$set:{age:+req.body.age}}).then(()=>{
            res.redirect('/list')
           
        })
       
   })
    
})
app.post('/home',bodyParser,(req,res)=>{
    mongodb.connect('mongodb://localhost:27017',{ useUnifiedTopology: true },(e,cl)=>{
        let db=cl.db('access')
        db.collection('user').insertOne({
           name:req.body.name,
           age:req.body.age
        }).then(()=>{
            res.redirect('/home')
        })
   })
    
})
app.listen(8000,()=>{
    console.log("hi there")
})