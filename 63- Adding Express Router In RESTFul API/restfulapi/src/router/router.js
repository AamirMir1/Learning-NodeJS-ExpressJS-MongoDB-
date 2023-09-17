const express = require("express")
const router = new express.Router()
const Students = require("../models/students")
// router.post("/students", (req, res) => {
//     const addStudent = new Students(req.body)
//     addStudent.save().then(() => {
//         res.status(201).send(addStudent)
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// })

router.post("/students", async (req, res) => {
    try {
        const addStudent = new Students(req.body)
        const create = await addStudent.save()
        res.status(201).send(addStudent)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Get request

router.get("/students", async (req, res) => {
    try {
        const read = await Students.find()
        res.status(200).send(read)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Getting Individual Data by id

router.get("/students/:id", async (req, res) => {
    try {
        const id = req.params.id
        const read = await Students.find({ _id: id })
        res.status(200).send(read)

    } catch (error) {
        res.status(400).send(error)
    }
})

// Getting Invidual Data by name

router.get("/students/byName/:name", async(req, res)=>{
    try {
        const getName = req.params.name
        const read = await Students.find({name: getName})
        res.status(200).send(read)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Patch Method to update data

router.patch("/students/:id", async(req, res)=>{
    try {
        const id = req.params.id
        const update = await Students.findByIdAndUpdate({_id: id}, req.body, {
            new: true
        })
        res.status(200).send(update)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.delete("/students/:id", async(req, res)=>{
    try {
        const id = req.params.id
        const dlt = await Students.findByIdAndDelete(id)
        res.status(200).send(dlt)
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router