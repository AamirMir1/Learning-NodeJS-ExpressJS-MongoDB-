const express = require("express")
const app = express()
require("./db/connect")
const Students = require('./models/students')
const port = process.env.PORT || 7000
app.use(express.json())

// Post Request

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

// Get request

app.get("/students", async (req, res) => {
    try {
        const read = await Students.find()
        res.status(200).send(read)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Getting Individual Data by id

app.get("/students/:id", async (req, res) => {
    try {
        const id = req.params.id
        const read = await Students.find({ _id: id })
        res.status(200).send(read)

    } catch (error) {
        res.status(400).send(error)
    }
})

// Getting Invidual Data by name

app.get("/students/byName/:name", async(req, res)=>{
    try {
        const getName = req.params.name
        const read = await Students.find({name: getName})
        res.status(200).send(read)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})