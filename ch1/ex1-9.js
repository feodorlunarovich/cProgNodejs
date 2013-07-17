process.stdin.resume();
process.stdin.setEncoding('utf8');

var util = require('util');

process.stdin.on('data', function(text) {
    if (text === 'quit\n'){
	process.exit();
    }

    text = text.substring(0, text.length - 1);
    var isPrevBlank = false;
    for (i = 0; i < text.length; i++) {
	if (text.charAt(i) == ' '){
	    if (!isPrevBlank) {
		isPrevBlank = true;
	    }
	    else {
		text = text.substring(0, i) + text.substring(i + 1);		
		i--;
	    }	 	    
	}
	else isPrevBlank = false;
    }
    console.log(text);
});