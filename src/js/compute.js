const converter = require('./converter.js');
const validate = require('./validate.js');

module.exports = function(input, type) {
	var out = {};

	// From decimal
	if (type == 'decimal') {
		var dec = validate.decimal(input);
		out.decimal = dec;
		out.hexadecimal = converter.convertDecToHex(dec);
		out.binary = converter.convertDecToBin(dec);
		out.octal = converter.convertDecToOct(dec);
	}

	// From hexadecimal
	else if (type == 'hexadecimal') {
		var hex = input.toUpperCase();
		hex = validate.hexadecimal(hex);
		// hex = hex.replace(/[^A-F0-9]/g, '');
		out.hexadecimal = hex;
		out.decimal = converter.convertHexToDec(hex);
		out.binary = converter.convertDecToBin(out.decimal);
		out.octal = converter.convertDecToOct(out.decimal);
	}

	// From binary
	else if (type == 'binary') {
		var bin = input.replace(/[^01]/g, '');
		out.binary = bin;

		// To decimal
		var dec = 0;
		var exp = 1;
		for (var i = bin.length - 1; i >= 0; i--) {
			dec += exp*bin[i];
			exp *= 2;
		};
		out.decimal = dec;

		out.hexadecimal = converter.convertDecToHex(dec);
		out.octal = converter.convertDecToOct(dec);
	}

	// From octal
	else if (type == 'octal') {
		out.octal = input.replace(/[^0-7]/g, '');
		out.decimal = converter.convertOctToDec(out.octal);
		out.binary = converter.convertDecToBin(out.decimal);
		out.hexadecimal = converter.convertDecToHex(out.decimal);
	}
	else if (type == 'rgb_r' || type == 'rgb_g' || type == 'rgb_b') {
		out.rgb_r = Math.min(converter.intval(document.getElementById('rgb_r').value), 255);
		out.rgb_g = Math.min(converter.intval(document.getElementById('rgb_g').value), 255);
		out.rgb_b = Math.min(converter.intval(document.getElementById('rgb_b').value), 255);
		out.hexadecimal = converter.convertDecToHex(out.rgb_r).padStart(2,'0') + converter.convertDecToHex(out.rgb_g).padStart(2,'0') + converter.convertDecToHex(out.rgb_b).padStart(2,'0');
		out.decimal = converter.convertHexToDec(out.hexadecimal);
		out.binary = converter.convertDecToBin(out.decimal);
		out.octal = converter.convertDecToOct(out.decimal);
		out.base256 = converter.convertDecTo256(out.decimal);
	}
	else if (type == 'base256') {
		out.base256 = validate.base256(input);
		out.decimal = converter.convert256ToDec(out.base256);
		out.hexadecimal = converter.convertDecToHex(dec);
		out.binary = converter.convertDecToBin(dec);
		out.octal = converter.convertDecToOct(dec);
	}
	else {
		return;
	}

	// Color
	if (type == 'rgb_r' || type == 'rgb_g' || type == 'rgb_b') {
		out.rgb_r = Math.min(converter.intval(document.getElementById('rgb_r').value), 255);
		out.rgb_g = Math.min(converter.intval(document.getElementById('rgb_g').value), 255);
		out.rgb_b = Math.min(converter.intval(document.getElementById('rgb_b').value), 255);
		out.hexadecimal = converter.convertDecToHex(out.rgb_r).padStart(2,'0') + converter.convertDecToHex(out.rgb_g).padStart(2,'0') + converter.convertDecToHex(out.rgb_b).padStart(2,'0');
		out.color = out.hexadecimal.padStart(6,'0');
	}
	else {
		if (out.hexadecimal.length > 6) {
			out.color = '';
			out.rgb_r = '';
			out.rgb_g = '';
			out.rgb_b = '';
		}
		else {
			const hexinput = out.hexadecimal.padStart(6, '0');
			out.color = hexinput;
			out.rgb_r = converter.convertHexToDec(hexinput.slice(0,2));
			out.rgb_g = converter.convertHexToDec(hexinput.slice(2,4));
			out.rgb_b = converter.convertHexToDec(hexinput.slice(4,6));
		}
	}

	return out;
}