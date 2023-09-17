const chalk = require("chalk")
const validator = require("validator")

console.log(chalk.blue("True"))
console.log(chalk.red("false"))

console.log(chalk.blue.inverse("True"))
console.log(chalk.red.inverse("false"))

const checkEmail = validator.isEmail("Aamir8373@gmail.com")
console.log(checkEmail ? chalk.yellow.bold("Your email is valid") : chalk.red.bold("Your email is not valid"))
