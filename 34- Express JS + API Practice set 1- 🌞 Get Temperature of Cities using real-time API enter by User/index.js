const express = require("express")
const app = express()
const requests = require("requests")

app.get("/", (req, res) => {
    res.send("This is our home page")
})

app.get("/about", (req, res) => {
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=d4dfaa247a0e28043d9d4882621c850e`).on("data", (chunk) => {
        const toOriginal = JSON.parse(chunk)
        const toArr = [toOriginal]
        console.log()
        const printThis = `<h2>The temperature in ${toArr[0].name} is ${toArr[0].main.temp} C</h2>`
        const head = "<h1>" + printThis + "<h1>"
        res.write(head)
    }).on("end", () => {
        res.end()
    })

})

app.listen(8000, () => {
    console.log("Listening to port 8000");
})