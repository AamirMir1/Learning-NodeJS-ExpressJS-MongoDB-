const express = require("express")
const app = express()
const port = 8000

const path = require("path")

const staticPath = path.join(__dirname, "../public")

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

app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`)
})