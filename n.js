const ex=require('express');
const app=ex();
app.use((req,res,next)=>{
    res.send("<h1>hi kharya </h1>");
    next();
},(req,res,next)=>{
  console.log("<h2>hi zabla </h2>");
  next();
},(req,res)=>{
    console.log("hi tharta");
   
});
app.listen(3000,()=>{
    console.log("khriro");
})