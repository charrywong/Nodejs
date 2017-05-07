var readline = require('readline');
const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
rl.on('line', function (line) {
    handle(line);
});

function handle(line){
    console.log(Math.round(line));
}