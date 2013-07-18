var BLANK = true;

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(input) {
    if (input == 'quit\n')
	process.exit();

    input = input.substr(0, input.length -1);
    for (i = 0; i < input.length; i++) {
	if (input.charAt(i) == '\t' || input.charAt(i) == ' ') {
	    if (!BLANK) {
		BLANK = true;
		process.stdout.write('\n');
	    }
	}
	else {
	    process.stdout.write(input.charAt(i));
	    BLANK = false;
	}
    }
    process.stdout.write('\n');
});

