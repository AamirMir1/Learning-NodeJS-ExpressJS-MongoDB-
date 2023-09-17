const express = require("express")
const app = express()
const port = process.env.PORT || 8000
const path = require("path")
const publicStatic = path.join(__dirname, "../public")
const staticViews = path.join(__dirname, "../templates/views")
const staticPartials = path.join(__dirname, "../templates/partials")
const hbs = require("hbs")

app.set("view engine", "hbs")
app.set("views", staticViews)

hbs.registerPartials(staticPartials)
app.use(express.static(publicStatic))
app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/weather", (req, res) => {
     res.render("weather")
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})