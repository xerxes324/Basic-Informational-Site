const http = require("node:http");
const port = 8080;
const host = "localhost";
const fs = require('fs');


const server = http.createServer((req,res) => {
    let path;
    let statuscode = 200;

    if ( req.url === "/"){
        path = "index.html";
    }
    else if ( req.url === "/about"){
        path = "about.html";
    }
    else if ( req.url === "/contact-me"){
        path = "contact-me.html";
    }
    else{
        path = "404.html";
        statuscode = 404;
    }

    res.writeHead(statuscode, {"Content-Type" : "text/html"});
    fs.readFile(path, "utf8", (err, data) =>{
        if ( err){
            console.log(err);
        }
        res.end(data);
    })
})


server.listen(port, host, ()=>{
    console.log(`the server is starting on port ${port}`);
})