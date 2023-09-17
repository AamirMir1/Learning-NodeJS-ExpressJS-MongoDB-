const mongoose = require("mongoose")

// Connection Creation A Creating A New Database

mongoose.connect("mongodb://localhost:27017/coolStudents").then(() => {
    console.log("Connected Successfully")
}).catch((error) => {
    console.log(error);
})

// Schema __ defines the structure of the document

const coolSchema = new mongoose.Schema({
    name: String,
    marks: Number,
    age: Number,
    gender: String
})

// Creating collections using model

const Cool = new mongoose.model("Cool", coolSchema)

// Inserting Documents

const insertingDocuments = async () => {
    const cool1 = new Cool({
        name: "Aamir",
        marks: 893,
        age: 18,
        gender: "Male"
    })
    const cool2 = new Cool({
        name: "Shahzaib",
        marks: 789,
        age: 18,
        gender: "Male"
    })
    const cool3 = new Cool({
        name: "Rohan",
        marks: 493,
        age: 32,
        gender: "Male"
    })
    const cool4 = new Cool({
        name: "Ayesha",
        marks: 393,
        age: 17,
        gender: "Female"
    })
    const cool5 = new Cool({
        name: "Khosirah",
        marks: 291,
        age: 23,
        gender: "Transgender"
    })
    const cool6 = new Cool({
        name: "Sexa",
        marks: 832,
        age: 29,
        gender: "Transgender"
    })
    const cool7 = new Cool({
        name: "Rohana",
        marks: 500,
        age: 18,
        gender: "Transgender"
    })
    const cool8 = new Cool({
        name: "Arshan",
        marks: 893,
        age: 18,
        gender: "Male"
    })
    const cool9 = new Cool({
        name: "Aliya Butt",
        marks: 400,
        age: 23,
        gender: "Female"
    })
    const cool10 = new Cool({
        name: "Sultana",
        marks: 839,
        age: 19,
        gender: "Female"
    })
    const insert = await Cool.insertMany([cool1, cool2, cool3, cool4, cool5, cool6, cool7, cool8, cool9, cool10])
    // console.log(insert)
}

// insertingDocuments()

// Reading Data With Comparisons Operators 💘💘

const readingDocuments = async () => {
    // const read = await Cool.find().sort({age: 1 })   // To 
    const read = await Cool.find().countDocuments()
    /*
    const read = await Cool.find({marks: {$gt: 500}}) // Greater than operator
    const read = await Cool.find({marks: {$lt: 400}})  // Less than operator
    const read = await Cool.find({marks: {$gte: 500}})  // Greater than and equal to operator
    const read = await Cool.find({marks: {$lte: 500}})  // Less than and equalt to operator
    const read = await Cool.find({name: {$in: ["Ayesha", "Aamir"]}})  // in operator
    const read = await Cool.find({age: {$nin: [18, 19]}})   // nin operator
    const read = await Cool.find({age: {$eq: 18}})  // equal to operator
    const read = await Cool.find({age: {$ne: 18}})  // not equal to operator
    */

    console.log(read)

}
readingDocuments()

// Reading Documents Using Logical Operators
/*
const readingDocuments = async () => {
    // const read = await Cool.find({$or: [{gender: "Transgender"}, {marks: 500}]})  // or operator
    // const read = await Cool.find({$and: [{age: 18}, {gender: "Male"}]}) and operator
    // const read = await Cool.find({marks: {$not: {$gt: 500}}})
    const read = await Cool.find({$nor: [{age: {$gt: 18}}, {marks: {$lt: 500}}]})
    console.log(read)
}
// readingDocuments()

*/