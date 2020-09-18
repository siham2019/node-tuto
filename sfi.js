const express=require("express")
const path = require('path');
const app=express()
app.use(express.static(path.join(__dirname,'g')))
app.get('/',(req,res,next)=>{
   // res.sendFile(__dirname+'//f//index.html'); process.plarform win32
   res.sendFile(path.join(__dirname,'f','index.html'))
})


app.listen(3000,()=>{
    console.log("ffdsssdds")
})