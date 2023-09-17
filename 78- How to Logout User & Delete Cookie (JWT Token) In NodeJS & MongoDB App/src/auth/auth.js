const jwt = require("jsonwebtoken")
const User = require("../models/users")
const cookie = require("cookie-parser")

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.aboutLogin
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY)
        const getUser = await User.findOne({ _id: verifyUser._id })
        req.token = token
        req.user = getUser
        return next()
        
    } catch (error) {
        res.status(401).send(error)
    }
}

module.exports = auth