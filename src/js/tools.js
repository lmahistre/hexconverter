
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
	return exports.trim0(aOut.join(''));
}


exports.multiplyBy2 = function(dec) {
	const inp = ''+dec;
	let aOut = [];
	for (let i=0; i<=inp.length; i++) {
		aOut[i] = 0;
	}
	for (let i=inp.length-1; i>=0; i--) {
		let x = parseInt(inp[i]) * 2;
		aOut[i+1] += x;
		if (aOut[i+1] > 9) {
			aOut[i+1] -= 10;
			aOut[i] += 1;
		}
	}
	return exports.trim0(aOut.join(''));
}


exports.add1 = function(dec) {
	const inp = ''+dec;
	if (inp.length > 0) {
		let aOut = [];
		for (let i=0; i<=inp.length; i++) {
			if (i > 0) {
				aOut[i] = parseInt(inp[i-1]);
			}
			else {
				aOut[i] = 0;
			}
		}
		aOut[inp.length] += 1;
		for (let i=inp.length-1; i>=0; i--) {
			if (aOut[i+1] > 9) {
				aOut[i+1] -= 10;
				aOut[i] += 1;
			}
		}
		return exports.trim0(aOut.join(''));
	}
	else {
		return '1';
	}
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
		return ''+val;
	}
	else {
		return chars[val];
	}
}


exports.hexToDec = function(hex) {
	var htd = {
		'A' : 10,
		'B' : 11,
		'C' : 12,
		'D' : 13,
		'E' : 14,
		'F' : 15,
	};
	for (var i = 0; i < 10; i++) {
		htd[''+i] = i;
	};
	return htd[hex];
}


exports.decToBin = function(dec) {
	let inp = ''+dec;
	let bin = '';
	while (exports.higherThan1(inp)) {
		bin = (exports.modulo2(inp)) + bin;
		inp = exports.divBy2(inp);
	}
	bin = inp+bin;
	return bin;
}


exports.binToDec = function(bin) {
	let dec = 0;
	let exp = 1;
	for (var i = bin.length - 1; i >= 0; i--) {
		dec += exp*bin[i];
		exp *= 2;
	};
	return dec;
}


exports.binToHex = function(bin) {
	return ''+exports.decToHex(exports.binToDec(bin));
}


exports.hexToBin = function(hex) {
	return (''+exports.decToBin(exports.hexToDec(hex))).padStart(4, '0');
}


exports.trim0 = function(str) {
	return str.replace(/^0+/gm,'');
}