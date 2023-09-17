const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.write("<h1>This is h1 tag</h1>")
    res.write("<h2>This is h2 tag</h2>")
    res.write("<h3>This is h3 tag</h3>")
    res.write("<h4>This is h4 tag</h4>")
    res.send()
})

app.get("/contact", (req, res) => {
    res.send([
        {
            name: "Aamir",
            class: "Express.js",
            ExpertIn: "JavaScript"
        },
        {
            name: "Aamir",
            class: "Express.js",
            ExpertIn: "JavaScript"
        },
        {
            name: "Aamir",
            class: "Express.js",
            ExpertIn: "JavaScript"
        },
    ]) // If you send a object or array as a response in express it will automatically convert in to JSON
})

// The javascript object will be automatically convert in to JSON after sending res.send() or res.json() and the content-type will also automatically set to JSON

// The methods are identically when an object or array is passed, but res.json() will also convert non-objects, such as null and undefined, which are not valid JSON

//طریقے ایک جیسے ہوتے ہیں جب کوئی آبجیکٹ یا ارے پاس ہوتا ہے، لیکن res.json() غیر آبجیکٹ کو بھی تبدیل کر دے گا، جیسے کہ null اور undefined، جو درست JSON نہیں ہیں۔

app.get("/help", (req, res) => {
    res.json([
        {
            name: "rocker",
            roll: "Progdsmmer",
            credits: "Hardsfry"
        },
        {
            name: "Thapads",
            roll: "Programasdmer",
            credits: "Harryds"
        },
        {
            name: "Thapa",
            roll: "Programmer",
            credits: "Harrsdy"
        },
    ])
})

app.listen(4000, () => {
    console.log("Listening to port 4000")
})