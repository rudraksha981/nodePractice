const chalk = require("chalk"); // used chalk@4.1.0 stable version

console.log(chalk.red.bgWhite("Ravindra"));
console.log(chalk.inverse.red.bgWhite("Gadhave"));

const log = console.log;

log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!' ))