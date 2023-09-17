const bcrypt = require("bcryptjs")

const hashing = async (password)=>{
    const hash = await bcrypt.hash(password, 10)
    console.log(hash)
    const isMatch = await bcrypt.compare("Aamir726", hash)
    console.log(isMatch)
}
hashing("Aamir726")