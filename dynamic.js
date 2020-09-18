const express = require('express');
const app=express()
const path = require('path');

const bodyParser = require('body-parser').urlencoded(
    {
      extended:true
    }
) // pour obtenir data par post
app.set('view engine','ejs') //moteur pour content dynamic
app.set('views','v') // folder of ejs file


app.use(express.static(path.join(__dirname,'g')))
app.get('/',(req,res)=>{
    console.log(req.query);

     res.render('index',{
         title:"mama tachacha",
    
     })
})
app.get('/kjh',(req,res)=>{
  

    res.redirect('/')
})
app.get('/:name',(req,res)=>{
  

     res.render('index',{
         title:"mama tachacha",
         name:req.params.name
     })
})
app.post('/:name',bodyParser,(req,res)=>{
    res.render('index',{
        name:req.body.name,
        title:"mama tachacha"
    })
})
app.listen(8000,()=>{
    console.log("hi there")
})