import * as tools from './tools.js';

export function convertBinToOct(bin) {
	let tb = bin;
	let outArray = [];
	while (tb.length > 0) {
		outArray.unshift(tools.binToHex((tb.slice(-3))));
		tb = tb.slice(0, -3);
	}
	return outArray.join('');
}

export function convertBinToHex(bin) {
	let tb = bin;
	let outArray = [];
	while (tb.length > 0) {
		outArray.unshift(tools.binToHex((tb.slice(-4))));
		tb = tb.slice(0, -4);
	}
	return outArray.join('');
}

export function convertHexToBin(hex) {
	let bin = '';
	for (let i=0; i<hex.length; i++) {
		bin += tools.hexToBin(hex[i]);
	}
	bin = tools.trim0(bin);
	return bin;
}

export function convertBinTo256(bin) {
	let tb = bin;
	let outArray = [];
	while (tb.length > 0) {
		outArray.unshift(tools.binToDec((tb.slice(-8))));
		tb = tb.slice(0, -8);
	}
	return outArray.join(',');
}

export function convertDecToBin(dec) {
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

export function convertBinToDec(bin) {
	let dec = '';
	for (let i=0; i<bin.length; i++) {
		dec = tools.multiplyBy2(dec);
		if (bin[i] == '1') {
			dec = tools.add1(dec);
		}
	}
	return dec;
}

export function convertDecToHex(dec) {
	var hex = '';
	while (dec > 15) {
		hex = tools.decToHex(dec % 16)+hex;
		dec = Math.floor(dec / 16);
	}
	hex = tools.decToHex(dec)+hex;
	return hex;
}

export function convertDecToOct(dec) {
	let oct = '';
	let decT = dec;
	while (decT > 7) {
		oct = (decT % 8) + oct;
		decT = Math.floor(decT / 8);
	}
	oct = decT+oct;
	return oct;
}

export function convertOctToBin(oct) {
	let bin = '';
	for (let i=0; i<oct.length; i++) {
		bin += tools.decToBin(oct[i]).padStart(3, '0');
	}
	bin = tools.trim0(bin);
	return bin;
}

export function convert256ToBin(tfs) {
	let bin = '';
	const aTfs = tfs.split(',');
	for (let i=0; i<aTfs.length; i++) {
		bin += tools.decToBin(aTfs[i]).padStart(8, '0');
	}
	bin = tools.trim0(bin);
	return bin;
}

export function convert256ToAscii(inp) {
	const parts = inp.split(',').map(function(part) {
		if (part !== '') {
			return String.fromCharCode(parseInt(part));
		}
	}).filter(e => typeof e !== 'undefined');
	return parts.join('');
}

export function convertAsciiTo256(inp) {
	const base256 = [];
	for (let i=0; i<inp.length; i++) {
		base256.push(inp.charCodeAt(i));
	}
	return base256.join(',');
}
