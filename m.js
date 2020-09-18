const ex=require('express');
const app=ex();
const f=require('./r')
app.get("/about",(req,res)=>{
    res.send("hi about")
})
app.post("/go",(req,res)=>{
    res.send("hi go")
})

app.all("/",(req,res)=>{
    res.send("hi home")
})
app.use("/fam",f)
app.listen(3000,()=>{
    console.log("miami");
})
app.use((req,res)=>{
    res.send("hi win rak rayah a si mohmed")
})