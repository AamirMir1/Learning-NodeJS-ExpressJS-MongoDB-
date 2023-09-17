const express = require("express")
const app = express()

app.set("view engine", "hbs")

app.get("/", (req, res)=>{
  res.render("index", {
      calTitle: "My Calculator",
      credits: "Created By Aamir"
  })
})
app.get("/contact", (req, res)=>{
    
})
app.get("/hel", (req, res)=>{
    
})

app.listen(8000, ()=>{
    console.log("Listening to port 8000");
})