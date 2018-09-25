const tools = require('./tools.js');

exports.decimal = function(inp) {
	let a = parseInt(inp);
	if (isNaN(a)) {
		a = 0;
	}
	a = Math.max(0, a);
	return a;
}


exports.octal = function(inp) {
	return (''+inp).replace(/[^0-7]/g, '');
}


exports.hexadecimal = function(inp) {
	return inp.replace(/[^A-F0-9]/g, '');
}

exports.binary = function(input) {
	return input.replace(/[^01]/g, '');
}


exports.base256 = function(inp) {
	let base256 = inp.replace(/[^0-9,]/g, '');
	let ab256 = base256.split(',');
	for (let i=0; i<ab256.length; i++) {
		ab256[i] = exports.decimal(ab256[i]);
		ab256[i] = Math.min(255, ab256[i]);
	}
	return ab256.join(',');
}


exports.rgb = tools.intval;