const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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
        validate(value) {
            if (!validator.isEmail(value)) {
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
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.generateAToken = async function () {
    try {
        const token = jwt.sign({ _id: this.id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token })
        return this.save()
        return token     

    } catch (error) {
        res.status(400).send(error)
    }
   

}

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        console.log(this.password)
        this.password = await bcrypt.hash(this.password, 10)
        console.log(this.password)
        this.confirmpassword = await bcrypt.hash(this.confirmpassword, 10)
    }
    next()
})

const User = new mongoose.model("User", userSchema)
module.exports = User