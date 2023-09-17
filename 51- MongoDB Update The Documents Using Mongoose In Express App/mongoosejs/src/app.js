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

const updatingDocuments = async (id) => {
    try {
        const update = await Cool.findByIdAndUpdate({_id: id}, {name: "Shahzaib Karar"}, {new: true})
        console.log(update);
    } catch (error) {
        console.log(error);
    }

}
updatingDocuments("6290870adf1bde70323bde6b")
