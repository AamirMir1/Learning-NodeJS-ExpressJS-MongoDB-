const express = require('express')
const router = new express.Router()
const Men = require("../models/men")

// Handle with post request
router.post("/kings", async (req, res) => {
    try {
        const insert = new Men(req.body)
        const inserting = await insert.save().
            res.status(201).send(inserting)
        console.log(inserting)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})

// Handle with get request

router.get("/kings", async (req, res) => {
    try {
        const read = await Men.find().sort({ Ranking: 1 })
        res.status(200).send(read)
    } catch (error) {
        res.status(400).send(error)        
    }
})

// Handle individual data with get request

router.get("/kings/:id", async(req, res)=>{
    try {
        const id = req.params.id
        const read = await Men.findById({_id: id})
        res.status(200).send(read)
    } catch (error) {
        res.status(404).send(error)
    }
})

// Handle with patch request

router.patch("/kings/:id", async(req, res)=>{
    try {
        const id = req.params.id
        const change = await Men.findByIdAndUpdate({_id: id}, req.body, {
            new: true
        })
        res.status(200).send(change)
        
    } catch (error) {
        res.status(400).send(error)        
    }
})
router.delete("/kings/:id", async(req, res)=>{
    try {
        const dlt = await Men.findByIdAndDelete(req.params.id)
        res.status(200).send(dlt)
    } catch (error) {
        res.status(400).send(error)
    }

})
module.exports = router
