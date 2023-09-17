const jwt = require("jsonwebtoken")

const jsonwebtoken = async()=>{
   const token = jwt.sign({_id: "03555020624"}, "mynameisaamiriamasoftwaredeveloperandafreelancer", {expiresIn: "10 minutes"})
   console.log(token)
   
   const userVerification = jwt.verify(token, "mynameisaamiriamasoftwaredeveloperandafreelancer")
   console.log(userVerification)
}
jsonwebtoken()
