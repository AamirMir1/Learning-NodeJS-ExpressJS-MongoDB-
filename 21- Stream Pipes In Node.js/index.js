// stream.pipe()  The method used to take a readable stream and connect it to a writable stream

const fs = require("fs")
const http = require("http")

const server = http.createServer()
server.on("request", (req, res)=>{
    const stream = fs.createReadStream("read.txt")
    stream.pipe(res)
})
server.listen(4000, "127.0.0.1", ()=>{
    
})