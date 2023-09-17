const jwt = require("jsonwebtoken")
const User = require("../models/users")

const auth = async (req, res, next)=>{
    try {
        const token = req.cookies.jwt
        const verifyUser = jwt.verify(token, "mynameisaamirandiamafreelancer") 
        const user = await User.findOne({_id: verifyUser._id}) 
        console.log(user)
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = auth