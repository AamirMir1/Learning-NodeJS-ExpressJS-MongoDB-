// The http.createServer() method includes request and response parameters which is supplied by node.js.

// The request object can be used to get information about the current HTTP request

// The response object can be used to send a response for a current HTTP request.

// If the response from the HTTP server is supposed to be displayed as HTML,

// You should include an HTTP header with the correct content type:

const http = require("http")
const server = http.createServer((req, res)=>{
    res.end("Sending Response To Server")
})

server.listen(3100, "127.0.0.1", ()=>{
    console.log("Listening Response from port 6000")
})