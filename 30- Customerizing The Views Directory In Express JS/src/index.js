const express = require("express")
const app = express()
const path = require("path")

const templateDir = path.join(__dirname, "../templates")

app.set("view engine", "hbs")
app.set("views", templateDir)

app.get("/", (req, res)=>{
    res.render("index", {
        title: "home",
        para: "Welcome to our home page"
    })
})
app.get("/about", (req, res)=>{
    res.render("about", {
        title: "about", 
        para: "Welcome to our about page"
    })
})
app.get("/help", (req, res)=>{
    res.render("help", {
        title: "help",
        para: "Welcome to our help page",
        bgHelp: "https://api.unsplash.com/users/samuelzeller/photos █"
    })
})

app.listen(8000, ()=>{
    console.log("Listening to port 8000")
})