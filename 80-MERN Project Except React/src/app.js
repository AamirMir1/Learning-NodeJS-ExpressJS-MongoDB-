const express = require("express")
const app = express()
const port = process.env.PORT || 8000
const path = require("path")
require("./db/connect")
const hbs = require("hbs")
const User = require("./models/users")
const public_Path = path.join(__dirname, "../public")
const views_Path = path.join(__dirname, "../templates/views")
const partials_Path = path.join(__dirname, "../templates/partials")
const bcrypt = require("bcryptjs")
const auth = require("./middleware/authen")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
app.use(cookieParser())
app.set("view engine", "hbs")
app.set("views", views_Path)
hbs.registerPartials(partials_Path)
app.use(express.static(public_Path))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.get("/", (req, res) => {

    try {
        res.render("index")
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get("/addnotes", auth, (req, res) => {
    try {
        res.render("addnotes")
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get("/login", (req, res) => {
    try {
        res.render("login")
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get("/register", (req, res) => {
    try {
        res.render("register")
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get("/logout", auth, async (req, res) => {
    try {
        res.clearCookie("jwt")
        req.user.tokens = req.user.tokens.filter((currentToken) => {
            return currentToken.token !== req.token
        })
        await req.user.save()
        res.render("logout")
    } catch (error) {
        res.status(400).send(error)
    }
})

app.post("/register", async (req, res) => {
    try {
        const password = req.body.password
        const confirmpassword = req.body.confirmpassword
        if (password === confirmpassword) {
            const insert = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword,
                notes: []
            })

            /*
            const token = await insert.generateToken()
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 500000),
                httpOnly: true
                // secure: true
            })
            */

            const data = await insert.save()
            res.status(401).render("login")
        }
    } catch (error) {
        res.status(400).send(error)
    }
})
app.post("/login", async (req, res) => {
    try {
        const password = req.body.password
        const read = await User.findOne({ email: req.body.email })
        const isMatching = await bcrypt.compare(password, read.password)
        const token = await read.generateToken()

        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 5000000),
            httpOnly: true
            // secure: true
        })

        if (isMatching) {
            res.status(200).render("index")
        } else {
            res.status(400).send("Invalid Login Details")
        }
    } catch (error) {
        res.status(400).send("Invalid Login Details")
    }
})
app.post("/addnotes", auth, async (req, res) => {
    try {
        const notetitle = req.body.notetitle
        const noteData = req.body.noteData

        req.user.notes = req.user.notes.concat({ notetitle: notetitle, noteData: noteData })
        await req.user.save()
        res.render("index")
        console.log(req.user.notes)
    } catch (error) {
        res.status(400).send(error)
    }
})
app.get("/yournotes", auth, async (req, res) => {
    try {
        // const html = ``
        // const getNote = document.getElementById("myNotesContent")
        // req.user.notes.forEach((note) => {
        //     html += `<div class="registerContent beOnTop registerForm extraCSS">
        //          <h1>${note.notetitle}</h1>
        //       <p>${note.noteData}</p>
        //     </div>`
        // })
        // getNote.innerHTML = html
        let arr = []
        const finder = await User.findById({_id: req.user._id})
        finder.notes.forEach((note)=>{
           arr.push(note)
        })
        
        console.log("this is my user", req.user)
        console.log("i have found this", finder)
        console.log("This is your arr", arr)
        res.render("yournotes", {
            yournote: arr
        })

    } catch (error) {
        res.status(400).send(error)
    }
})
app.listen(port, () => {
    console.log(`Listening to the server at port ${port}`)
})

