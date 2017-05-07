var readline = require('readline');
const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
var lines = 2;
var input=[];
rl.on('line', function (line) {
    input.push(line);
    if(input.length===lines){
        handle();
    }
});

function handle(){
    var str = input[0].toLowerCase(),
		mchar = input[1].toLowerCase(),
		sum=0;
	for(var i=0;i<str.length;i++){
		if(str[i]===mchar){
			sum++;
		}
	}
	console.log(sum);
}