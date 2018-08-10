
// TO REMOVE
exports.intval = function(val) {
	let a = parseInt(val);
	if (isNaN(a)) {
		a = 0;
	}
	return a;
}


exports.convertHexToDec = function(hex) {
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

	var dec = 0;
	var decValues = [];
	for (var i = hex.length - 1; i >= 0; i--) {
		decValues.push(htd[hex[i]]);
	};
	var exp = 1;
	for (var i = 0; i < decValues.length; i++) {
		dec += exp*decValues[i];
		exp *=16;
	};
	return dec;
}


exports.convertOctToDec = function(oct) {
	let dec = 0;
	let exp = 1;
	for (var i = oct.length - 1; i >= 0; i--) {
		dec += exp*oct[i];
		exp *= 8;
	};
	return dec;
}


exports.convert256ToDec = function(b256) {
	const inp = b256.split(',');
	let dec = 0;
	let exp = 1;
	for (var i = inp.length - 1; i >= 0; i--) {
		dec += exp*inp[i];
		exp *= 256;
	};
	return dec;
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


exports.convertDecToBin = function(dec) {
	var bin = '';
	while (dec > 1) {
		bin = (dec % 2) + bin;
		dec = Math.floor(dec / 2);
	}
	bin = dec+bin;
	return bin;
}


exports.convertDecToHex = function(dec) {
	var hex = '';
	while (dec > 15) {
		hex = exports.decToHex(dec % 16)+hex;
		dec = Math.floor(dec / 16);
	}
	hex = exports.decToHex(dec)+hex;
	return hex;
}


exports.convertDecToOct = function(dec) {
	var oct = '';
	let decT = dec;
	while (decT > 7) {
		oct = (decT % 8) + oct;
		decT = Math.floor(decT / 8);
	}
	oct = decT+oct;
	return oct;
}


exports.convertDecTo256 = function(dec) {
	let sb256  = '';
	let ab256 = [];
	let decT = dec;
	while (decT > 255) {
		sb256 = (decT % 256) + sb256;
		decT = Math.floor(decT / 256);
	}
	ab256.push(decT);
	sb256 = ab256.join(',');
	return sb256;
}