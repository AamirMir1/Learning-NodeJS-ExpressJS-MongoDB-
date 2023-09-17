const express = require("express")
const app = express()
require("./db/connect")
const Students = require('./models/students')
const port = process.env.PORT || 7000
app.use(express.json())
const router = require("./router/router")
app.use(router)
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})