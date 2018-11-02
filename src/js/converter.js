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
	bin = tools.trim0(bin);
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


exports.convertDecToBin = function(dec) {
	let inp = ''+dec;
	let bin = '';
	while (tools.higherThan1(inp)) {
		bin = (tools.modulo2(inp)) + bin;
		inp = tools.divBy2(inp);
	}
	bin = inp+bin;
	bin = tools.trim0(bin);
	return bin;
}


exports.convertBinToDec = function(bin) {
	let dec = '';
	for (let i=0; i<bin.length; i++) {
		dec = tools.multiplyBy2(dec);
		if (bin[i] == '1') {
			dec = tools.add1(dec);
		}
	}
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


exports.convertOctToBin = function(oct) {
	let bin = '';
	for (let i=0; i<oct.length; i++) {
		bin += tools.decToBin(oct[i]).padStart(3, '0');
	}
	bin = tools.trim0(bin);
	return bin;
}


exports.convert256ToBin = function(tfs) {
	let bin = '';
	const aTfs = tfs.split(',');
	for (let i=0; i<aTfs.length; i++) {
		bin += tools.decToBin(aTfs[i]).padStart(8, '0');
	}
	bin = tools.trim0(bin);
	return bin;
}