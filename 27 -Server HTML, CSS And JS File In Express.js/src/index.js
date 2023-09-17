const path = require("path")

const express = require("express")
const app = express()

// Absolute Path
const staticPath = path.join(__dirname, "../public")

// Built in Middleware

app.use(express.static(staticPath))

app.get("/", (req, res)=>{
    res.send("This is my home page")
})

app.get("/contact", (req, res)=>{
    res.send("This is my contact page")
})

app.get("/help", (req, res)=>{
    res.send("This is my help page")
})

app.listen(8000, ()=>{
    console.log("Listening to port 8000");
    
})