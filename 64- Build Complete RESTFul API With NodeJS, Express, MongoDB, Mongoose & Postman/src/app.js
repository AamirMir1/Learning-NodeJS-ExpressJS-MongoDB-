const express = require("express")
const app = express()
const port = process.env.PORT || 7000
require("./db/connect")
const router = require("./router/router")
app.use(express.json())
app.use(router)

app.get("/", (req, res)=>{
    res.send("This is my response")
})

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})