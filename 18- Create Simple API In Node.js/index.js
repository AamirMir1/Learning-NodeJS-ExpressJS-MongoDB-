const fs = require("fs")
const data = fs.readFileSync("fetch.json", "utf-8")

const http = require("http")
const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.end("Welcome To My Page")
    }
    else if(req.url == "/home"){
        res.end("Welcome to home page")
    }
    else if (req.url == "/contact"){
        res.end("Welcome to contact page")
    }else if(req.url == "/getAPI"){
        res.writeHead(200, {"Content-type" : "application/json"})
        res.end(data)
    }else{
        res.writeHead(404, {"Content-type" : "text/html"})
        res.end("404 not found. Page doesn't exist")
    }

})
server.listen(9000, "127.0.0.1", () => {
    console.log("Listening port 9000");
})
