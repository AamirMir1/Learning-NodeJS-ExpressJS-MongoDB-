const http = require("http")
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url == "/") {
        res.write("Welcome to my page")
        res.end()
    } else if (req.url == "/home") {
        res.end("Hello from page home")
    } else if (req.url == "/contact") {
        res.write("Hello from page contact")
        res.end()
    } else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end("404 not found. Page doesn't exist")
    }

})

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port 8000");
})