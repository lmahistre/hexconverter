const tools = require('./tools.js');


exports.convertBinToOct = function(bin) {
	let tb = bin;
	let outArray = [];
	while (tb.length > 0) {
		outArray.unshift(tools.binToHex((tb.slice(-3))));
		tb = tb.slice(0, -3);
	}
	return outArray.join('');
}


exports.convertBinToHex = function(bin) {
	let tb = bin;
	let outArray = [];
	while (tb.length > 0) {
		outArray.unshift(tools.binToHex((tb.slice(-4))));
		tb = tb.slice(0, -4);
	}
	return outArray.join('');
}


exports.convertHexToBin = function(hex) {
	let bin = '';
	for (let i=0; i<hex.length; i++) {
		bin += tools.hexToBin(hex[i]);
	}
	return bin;
}


exports.convertBinTo256 = function(bin) {
	let tb = bin;
	let outArray = [];
	while (tb.length > 0) {
		outArray.unshift(tools.binToDec((tb.slice(-8))));
		tb = tb.slice(0, -8);
	}
	return outArray.join(',');
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


// DEPRECATED
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


exports.convertDecToBin = function(dec) {
	let inp = ''+dec;
	let bin = '';
	while (tools.higherThan1(inp)) {
		bin = (tools.modulo2(inp)) + bin;
		inp = tools.divBy2(inp);
	}
	bin = inp+bin;
	return bin;
}


exports.convertBinToDec = function(bin) {
	let dec = '';
	let exp = 1;
	for (var i = bin.length - 1; i >= 0; i--) {
		dec += exp*bin[i];
		exp *= 2;
	};
	return dec;
}


exports.convertDecToHex = function(dec) {
	var hex = '';
	while (dec > 15) {
		hex = tools.decToHex(dec % 16)+hex;
		dec = Math.floor(dec / 16);
	}
	hex = tools.decToHex(dec)+hex;
	return hex;
}


exports.convertDecToOct = function(dec) {
	let oct = '';
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
	while (decT > 0) {
		ab256.unshift(decT % 256);
		decT = Math.floor(decT / 256);
	}
	sb256 = ab256.join(',');
	return sb256;
}

exports.convertOctToBin = function(oct) {
	let bin = '';
	for (let i=0; i<oct.length; i++) {
		bin += tools.decToBin(oct[i]).padStart(3, '0');
	}
	return bin;
}