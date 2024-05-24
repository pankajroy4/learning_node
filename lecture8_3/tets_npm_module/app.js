const validator = require("validator")
let email = "pankajroy@gamil.com"

console.log(`Is ${email} valid?: ${validator.isEmail(email)}`)

email = "pankaj@"
console.log(`Is ${email} valid?: ${validator.isEmail(email)}`)

let name = "pankaj kumar"
console.log(`Is ${name} in lowercase?: ${validator.isLowercase(name)}`)

name = ""
console.log(`Is ${name} in empty?: ${validator.isEmpty(name)}`)

let freedom = "15-08-1947"
console.log(`Is ${freedom} a valid date?: ${validator.isDate(freedom)}`)

freedom = "1947-08-15"
console.log(`Is ${freedom} a valid date?: ${validator.isDate(freedom)}`)