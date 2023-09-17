// Express.js is a node.js framework. It's the most popular framework as of now (the most starred on NPM).

// ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends.

const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.send("This is my home page")
})

app.get("/contact", (req, res)=>{
    res.send("This is my contact page")
})

app.listen(7000, ()=>{
    console.log("Listening to port 7000");
    
})
// API
/*
get = read
post = create
put = update
delete = delete
*/

// The callback function has 2 parameters, request(req) and response(res).

// The request object(req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc.

// Similarly, the response object represents the HTTP response that the Express app sends when it receives an HTTP request.