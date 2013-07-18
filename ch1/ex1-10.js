var stdin = process.stdin;

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function(key) {
    if (key === '\u0003') {
	process.exit();
    }
    else if (key === '\t') {
	process.stdout.write("\\t");
    }
    else if (key === '\b') {
	process.stdout.write("\\b");
    }
    else if (key === '\\') {
	process.stdout.write("\\\\");
    }
    else 
	process.stdout.write(key);
});
