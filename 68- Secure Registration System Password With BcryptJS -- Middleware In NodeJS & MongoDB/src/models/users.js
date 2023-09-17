const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Your email is invalid")
            }
        },
        unique: [true, "Your email must be unique"]
    },
    phonenumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    confirmpassword: {
        type: String,
        required: true,
        minlength: 3
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        console.log(this.password)
        this.password = await bcrypt.hash(this.password, 10)
        console.log(this.password)
        this.confirmpassword = undefined;
    }
    next()
})

const User = new mongoose.model("User", userSchema)
module.exports = User