const os = require("os")
console.log("Your windows architecture is : " + os.arch())
console.log("Your free memory of ram is: " + os.freemem()/1024/1024/1024)
console.log("Your total memory of ram is: " + os.totalmem()/1024/1024/1024)
console.log(os.cpus()) // CPU information
console.log("Your windows account directory is: " + os.homedir())
console.log("Your PC name is: "+ os.hostname())
console.log(os.platform() + " OS you are using")
console.log("Version of OS is "+ os.release())
console.log(os.version() + " windows os you are using") 
console.log("Type of os is: " + os.type())
console.log(os.userInfo()) // Your information
console.log("Temporary files directory " + os.tmpdir())


