const yargs = require("yargs")

// console.log(process.args)
// console.log(yargs.argv)


// creating command

yargs.command({
    command: 'add',
    describe: 'adding a note',
    handler: function(){
        console.log("Adding a note")
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    handler: function(){
        console.log("removing a note")
    }
})

console.log(yargs.argv)

