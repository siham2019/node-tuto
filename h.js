const ht=require('http')
const hd=require('body/form')

ht.createServer((req,res)=>{
    res.setHeader('content-type','text/html')
    console.log(req.method)

   if (req.method="GET") {
        res.write("<form action='/' method='POST'>")
        res.write("<input name='username'>")
        res.write("<input type='submit'>")
        res.write("</form>")
        res.end()
    }
    
       if (req.method="POST") {
        /*     let b=[];
            console.log("skssssssssssssss")
            req.on('data',(chunk)=>{
                console.log(chunk)
             b.push(chunk);
             
            })
            req.on('end',()=>{
                b=Buffer.concat(b).toString()
                console.log(b)
                res.end("done");
            }) */
          hd(req,(err,body)=>{
               console.log(body);
               
           })
          
        }
}).listen(3000,()=>{
    console.log("hi there")
})