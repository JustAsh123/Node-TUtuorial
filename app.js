const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url ==='/'){
        res.end("Hello")
    } else if (req.url==='/about'){
        res.end("cAbout aaja")
    }   else{
        res.end("Error bitch boy ")
    }
})

server.listen(5000)