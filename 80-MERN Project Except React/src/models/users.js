const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 3
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Your email is invalid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    confirmpassword: {
        type: String,
        required: true,
        minlength: 8
    },
    notes: [{
        notetitle: {
            type: String,
            required: true
        },
        noteData: {
            type: String,
            required: true
        }
    }],
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})
userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            this.password = await bcrypt.hash(this.password, 10)
            this.confirmpassword = await bcrypt.hash(this.confirmpassword, 10)
        }
    } catch (error) {
        res.status(400).send(error)
    }

})

userSchema.methods.generateToken = async function (next) {
    try {
        const token = await jwt.sign({ _id: this.id }, "mynameisaamirandiamafreelancer")
        this.tokens = this.tokens.concat({ token: token })
        await this.save()
        return token
        next()
    } catch (error) {
        res.status(200).send(error)
    }
}

const User = new mongoose.model("User", userSchema)

module.exports = User