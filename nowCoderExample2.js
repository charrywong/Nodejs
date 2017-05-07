var readline = require('readline');
const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
var tag = 0;
var lines = 0;
var input=[];
rl.on('line', function (line) {
    if(tag===0){
        tag = 1;
        lines = Number(line);
    }else{
        input.push(Number(line));
    	if(input.length===lines){
        	handle(input);
            tag = 0;
            lines = 0;
            input=[];
    	}
    }
});

function handle(input){
    input.sort(function(x,y){
 		return x-y;
	});
	for(var i=0;i<input.length;i++){
        var pos = input.indexOf(input[i],i+1);
        if(pos!==-1){
            input.splice(pos,1);
            i--;
        }
    }
    console.log(input.join('\n'));
}