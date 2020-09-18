//console.log("kharya");

/*console.log(+process.argv[2] + +process.argv[3]);
const d = require('./modules/m');
console.log(d.h);*/
const h=require('http');
let p=h.createServer((req,res)=>{
  
    res.setHeader("Content-Type","text/html")
    res.write("helllo there \n")
    res.write("kharya")
    console.log(res.statusCode)
    console.log(req.url)
    console.log(req.method)
    res.end()
});
p.listen(3000,()=> console.log("hiiiiiiii"))