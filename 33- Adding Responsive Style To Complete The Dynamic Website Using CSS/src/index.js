const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
// const staticPath = path.join(__dirname, "../public")
// app.use(express.static(staticPath))

app.use(express.static(path.join(__dirname, "../public")))

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../templates/views"))
hbs.registerPartials(path.join(__dirname, "../templates/partials"))
app.get("/", (req, res)=>{
    res.render("index", {
        title: "Express Website"
    })
})
app.get("/about", (req, res)=>{
    res.render("about", {
        title: "Welcome To About Page"
    })
})
app.get("/contact", (req, res)=>{
    res.render("contact")
})
app.get("*", (req, res)=>{
    res.render("error", {
        notFound: `${req.url}`
    })
})
app.listen(8000, ()=>{
    console.log("Listening to port 8000")
})

