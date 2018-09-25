
exports.intval = function(val) {
	let a = parseInt(val);
	if (isNaN(a)) {
		a = 0;
	}
	return a;
}


exports.modulo2 = function(dec) {
	const inp = ''+dec;
	const len = inp.length;
	const mod = parseInt(inp[(len-1)])%2;
	return mod;
}


exports.divBy2 = function(dec) {
	const inp = ''+dec;
	let aOut = [];
	for (let i = inp.length - 1; i >= 0; i--) {
		let mod = inp[i]%2;
		if (mod && i<inp.length-1) {
			aOut[i+1] += 5;
		}
		aOut[i] = parseInt(inp[i]/2);
	}
	return exports.filter0(aOut.join(''));
}


exports.filter0 = function(str) {
	while (str.charAt(0) === '0') {
		str = str.substr(1);
	}
	return str;
}


exports.higherThan1 = function(dec) {
	const inp = ''+dec;
	if (inp.length > 1) {
		return true;
	}
	if (parseInt(inp[inp.length-1]) > 1) {
		return true;
	}
	return false;
}


exports.toBin = function(dec) {
	let inp = ''+dec;
	let bin = '';
	while (exports.higherThan1(inp)) {
		bin = (exports.modulo2(inp)) + bin;
		inp = exports.divBy2(inp);
	}
	bin = inp+bin;
	return bin;
}


exports.decToHex = function(val) {
	var chars = {
		10 : 'A',
		11 : 'B',
		12 : 'C',
		13 : 'D',
		14 : 'E',
		15 : 'F',
	};
	if (val < 10) {
		return val;
	}
	else {
		return chars[val];
	}
}