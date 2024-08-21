

//crete adding command and using builder object

const yargs = require("yargs");

yargs.command({
    command: 'add',
    describe: 'Adding note',
    builder: {
        title: {                                            //dont forget colon :
            describe: "Title",
            demandOption: true,
            type: String
        },

        copyright: {
            describe: "year",
            demandOption: true,
            type: yargs.number
        }
    },
    handler: function () {
        console.log("Title: " + yargs.argv.title)
        console.log("Copyright: " + yargs.argv.copyright)

    }
})

yargs.parse() // needed for parsing not like console.log
