process.stdin.resume();
process.stdin.setEncoding('utf8');

var util = require('util');

var nl = 0;

process.stdin.on('data', function(text) {
    if (text == 'quit\n') {
	console.log(nl);
	process.exit(0);
    }
    else ++nl;
})
	   