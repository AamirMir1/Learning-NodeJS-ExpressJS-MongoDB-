const express = require("express")
const app = express()
const port = 5000
app.get("/", (req, res)=>{
    res.send("This is my home page")
})

app.get("/contact", (req, res)=>{
    res.send("This is my contact page")
})

app.get("/temp", (req, res)=>{
    res.send("This is my temp page")
})

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})