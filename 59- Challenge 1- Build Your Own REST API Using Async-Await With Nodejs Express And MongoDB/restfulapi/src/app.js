const express = require("express")
const app = express()
require("./db/connect")
const Students = require('./models/students')
const port = process.env.PORT || 7000
app.use(express.json())

// app.post("/students", (req, res) => {
//     const addStudent = new Students(req.body)
//     addStudent.save().then(() => {
//         res.status(201).send(addStudent)
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// })

app.post("/students", async (req, res) => {
    try {
        const addStudent = new Students(req.body)
        const create = await addStudent.save()
        res.status(201).send(addStudent)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})