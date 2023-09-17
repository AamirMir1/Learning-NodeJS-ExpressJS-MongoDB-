// Events Module 💖
// Node.js has inbuild module called events
// where you can create, fire of listen for your own events

// Example 1 - Registering for the event to be fired only one time using once
// Example 2 - Create an event emitter instance a register a couple of callbacks
// Example 3 - Registering for the event with callback parameters

/*
// First Syntax 💖
const event = require("events")
const events = new event.EventEmitter()
*/

const EventEmitter = require("events")
const event = new EventEmitter()

// Example 1: Done___ 💖
event.on("myEvent", () => {
    console.log("This is my event")
})
event.emit("myEvent")

// Example 2: Done___ 💖
event.on("myName", () => {
    console.log("My name is Aamir")
})

event.on("myName", () => {
    console.log("My name is Arshan")
})

event.on("myName", () => {
    console.log("My name is Rahul")
})

event.emit("myName")

// Example 3: Done___ 💖
event.on("aboutPage", (status, msg) => {
    console.log(`Your page status is ${status} and your page is ${msg}`)
})
event.emit("aboutPage", 200, "ok")



// Modules that i have learnt

// 1: fs - to make changes with your file system 💖
// 2: path - to get path information of your file 💖
// 3: os - to get information of your operating system 💖
// 4: http - to create a server 💖
// 5 : events - to make your own events 💖

