require("dotenv").config()
const express = require('express')
const app = express()
const cookieParser = require("cookie-parser")
app.use(cookieParser())
const port = process.env.PORT || 8000
const hbs = require("hbs")
const async = require('hbs/lib/async')
require('./db/connect')
const path = require('path')
const staticPath = path.join(__dirname, "../public")
app.use(express.static(staticPath))
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
const User = require("./models/users")
app.use(express.urlencoded({ extended: false }))
const bcrypt = require("bcryptjs")
const cookie = require("cookie-parser")
app.set("view engine", "hbs")
app.set("views", templatePath)
hbs.registerPartials(partialsPath)

app.get("/", (req, res) => {
  res.render('index')
})

app.get("/secret", (req, res)=>{
  res.render("secret")
  console.log(req.cookies.aboutLogin)
})

app.get("/registration", (req, res) => {
  res.render('registration')
})

app.post("/registration", async (req, res) => {
  try {
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;

    if (password === confirmpassword) {
      const create = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        gender: req.body.gender,
        phonenumber: req.body.phonenumber,
        age: req.body.age,
        password: password,
        confirmpassword: confirmpassword
      })

      const token = await create.generateAToken()
      console.log("Your token", token.tokens[0].token)

      res.cookie("aboutRegis", token.tokens[0].token, {
        expires: new Date(Date.now() + 100000),
        httpOnly: true
      })

      const insert = await create.save()
      res.status(201).render("index")
    } else {
      res.status(400).send("Password doesn't match")
    }
  } catch (error) {
    res.status(400).send(error)
  }
})

app.get("/login", (req, res) => {
  res.render('login')
})

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const readEmail = await User.findOne({ email: email })
    const isMatch = await bcrypt.compare(password, readEmail.password)

    const token = await readEmail.generateAToken()
    // console.log("Your token", token)
    res.cookie("aboutLogin", token.tokens[0].token, {
      expires: new Date(Date.now() + 100000),
      httpOnly: true,
      secure: true
    })

    if (isMatch) {
      res.status(200).render('index')
    } else {
      res.status(400).send("Invalid Login Details")
    }
  } catch (error) {
    res.status(200).send("Invalid Login Details")
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
