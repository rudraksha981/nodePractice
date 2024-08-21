
const fs = require('fs');

const z  = require("./Utils.js");

// create file 
//fs.writeFileSync("note.txt", "This file was created by Node.js!..")

//fs.writeFileSync("note.txt", "This can override original" )

//fs.writeFileSync("note.txt", "Override")

fs.appendFileSync("note.txt", " Latest append")




console.log(z);

const y = z(2, 5)

console.log(z(2, 6)) //the function which is exported at last is consider for the const required.


// console.log(chalk.red.bgGray("yes "))