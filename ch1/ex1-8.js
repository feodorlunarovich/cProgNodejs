var util = require('util');

var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

var b = 0; 
var t = 0; 
var nl = 0;

stdin.on('data', function(key) {
    if (key === '\u0003') {        // \u0003 is ctrl-c character representation
	var out = util.format("blanks: %d, tabs: %d, new lines: %d", b, t, nl);
	console.log('\n' + out);
	process.exit();
    }
    else if (key === ' ')
	++b;
    else if (key === '\t')
	++t;
    else if (key === '\r') {
	++nl;
	process.stdout.write('\n');
    } 
    process.stdout.write(key);
});

