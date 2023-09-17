const mongoose = require("mongoose")

// Connection Creation And Creating New Database

mongoose.connect("mongodb://localhost:27017/checkValid").then(() => {
    console.log("Connected Successfully");
}).catch((error) => {
    console.log(error);
})

// Schema__ Defines the structure of the document

const validSchema = new mongoose.Schema({
    name: {
        type: String,
        uppercase: true,
        minlength: [3, "Minimum Length Should Be 3"],
        maxlength: [15, "Maximum Length Should Be 15"],
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minlength: [11, "Invalid Email"],
        maxlength: [30, "Invalid Email"]
    },
    phoneNumber: {
        type: Number,
        unique: true,
        trim: true,
        // min: 6,
        // max: 15,
        minlength: 6,
        maxlength: 15,
        required: true
    },
    language: {
        type: String,
        lowercase: true,
        unique: false,
        trim: true,
        enum: ["javascript", "c++", "java", "html"]
    },
    age: {
        type: Number,
        unique: false,
        trim: true,
        // validate(isAdult) {
        //     if (isAdult < 18) {
        //         throw new Error("Age Restriction")
        //     }
        // },
        validate: {
            validator: function(val){
                return val.length < 18
            },
            message: "You are not allowed to visit this website"
        }
    }
})




// Model__

const Valid = new mongoose.model("Valid", validSchema)
const insertingData = async () => {
    try {
        const data = new Valid({
            name: "  Aamir Mir       ",
            email: "Aai3f3j8@gmail.com",
            phoneNumber: 43752540420,
            age: 16,
            language: "JavaScript"
        })
        const insert = await Valid.insertMany([data])
        console.log(insert);

    } catch (error) {
        console.log(error);
    }
}
insertingData()

