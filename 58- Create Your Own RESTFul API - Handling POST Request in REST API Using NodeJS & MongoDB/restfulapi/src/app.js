const express = require("express")
const app = express()
require("./db/connect")
const Students = require('./models/students')
const port = process.env.PORT || 7000
app.use(express.json())

app.post("/students", (req, res) => {
    const addStudent = new Students(req.body)
    addStudent.save().then(() => {
        res.status(201).send(addStudent)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})