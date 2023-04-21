const http = require("http"); 
const fs=require('fs');
const server = http.createServer((req,res) => {
    if(req.url == '/contact')
    {
        res.end('welcome to contacts page')
    }
    else if(req.url == '/dummy')
    {
        const data=fs.readFileSync('dummy.html')
        res.end(data)
    }
    else{
        res.end('error 404 page not found')
    }
});

server.listen(8000);
console.log("server started on port 8000");