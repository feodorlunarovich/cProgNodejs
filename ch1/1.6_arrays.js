var util = require('util');

process.stdin.setRawMode('true');
process.stdin.setEncoding('utf8');
process.stdin.resume();

var nwhite = 0;
var nother = 0;
var ndigit = new Array();
for (i = 0; i < 10; i++){
    ndigit[i] = 0;
}

process.stdin.on('data', function(key){
    if (key === '\u0004') {
	printResult();
    }

    if (key === '\r')
	process.stdout.write('\n');
    else
	process.stdout.write(key);

    if (key.charCodeAt(0) >= '0'.charCodeAt(0) && 
	key.charCodeAt(0) <= '9'.charCodeAt(0))
	++ndigit[key.charCodeAt(0) - '0'.charCodeAt(0)];
    else if (key === ' ' || key === '\t' || key == '\r')
	++nwhite;
    else 
	++nother;
});

var printResult = function(){
    process.stdout.write("\ndigits = " + ndigit.join(" "));
    process.stdout.write('\n' + util.format("%d white, %d other\n", nwhite, nother));
    process.exit();
}
