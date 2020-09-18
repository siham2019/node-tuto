const express=require('express')
const app=express()
const bodyP=require('body-parser').urlencoded({
    extended:true
})

app.get("/",(req,res,next)=>
{
    res.setHeader('content-type','text/html')
    res.write("<form action='/' method='POST'>")
    res.write("<input name='username'>")
    res.write("<input type='submit'>")
    res.write("</form>")
    res.end()
}
)
app.post("/",bodyP,(req,res,next)=>{
    console.log(req.body)
    res.end()
})
app.listen(3000,()=>{
    console.log("khriro");
})
