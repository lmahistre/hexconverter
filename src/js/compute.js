const converter = require('./converter.js');
const validate = require('./validate.js');
// const dom = require('./dom.js');

module.exports = function(input, type) {
	var out = {};

	// From decimal
	if (type == 'decimal') {
		out.decimal = validate.decimal(input);
		out.hexadecimal = converter.convertDecToHex(out.decimal);
		out.binary = converter.convertDecToBin(out.decimal);
		out.octal = converter.convertDecToOct(out.decimal);
		out.base256 = converter.convertDecTo256(out.decimal);
	}

	// From hexadecimal
	else if (type == 'hexadecimal') {
		var hex = input.toUpperCase();
		hex = validate.hexadecimal(hex);
		out.hexadecimal = hex;
		out.decimal = converter.convertHexToDec(hex);
		out.binary = converter.convertDecToBin(out.decimal);
		out.octal = converter.convertDecToOct(out.decimal);
		out.base256 = converter.convertDecTo256(out.decimal);
	}

	// From binary
	else if (type == 'binary') {
		out.binary = validate.binary(input);
		out.decimal = converter.convertBinToDec(out.binary);
		out.hexadecimal = converter.convertDecToHex(out.decimal);
		out.octal = converter.convertDecToOct(out.decimal);
		out.base256 = converter.convertDecTo256(out.decimal);
	}

	// From octal
	else if (type == 'octal') {
		// out.octal = input.replace(/[^0-7]/g, '');
		out.octal = validate.octal(input);
		out.decimal = converter.convertOctToDec(out.octal);
		out.binary = converter.convertDecToBin(out.decimal);
		out.hexadecimal = converter.convertDecToHex(out.decimal);
		out.base256 = converter.convertDecTo256(out.decimal);
	}
	else if (type == 'rgb_r' || type == 'rgb_g' || type == 'rgb_b') {
		if (type == 'rgb_r') {
			out.rgb_r = Math.min(validate.rgb(input), 255);
		}
		if (type == 'rgb_g') {
			out.rgb_g = Math.min(validate.rgb(input), 255);
		}
		if (type == 'rgb_b') {
			out.rgb_b = Math.min(validate.rgb(input), 255);
		}
		out.hexadecimal = converter.convertDecToHex(out.rgb_r).padStart(2,'0') + converter.convertDecToHex(out.rgb_g).padStart(2,'0') + converter.convertDecToHex(out.rgb_b).padStart(2,'0');
		out.decimal = converter.convertHexToDec(out.hexadecimal);
		out.binary = converter.convertDecToBin(out.decimal);
		out.octal = converter.convertDecToOct(out.decimal);
		out.base256 = converter.convertDecTo256(out.decimal);
	}
	else if (type == 'base256') {
		out.base256 = validate.base256(input);
		out.decimal = converter.convert256ToDec(out.base256);
		out.hexadecimal = converter.convertDecToHex(out.decimal);
		out.binary = converter.convertDecToBin(out.decimal);
		out.octal = converter.convertDecToOct(out.decimal);
	}
	else {
		return;
	}

	// Color
	if (type == 'rgb_r' || type == 'rgb_g' || type == 'rgb_b') {
		if (type == 'rgb_r') {
			out.rgb_r = Math.min(validate.rgb(input), 255);
		}
		if (type == 'rgb_g') {
			out.rgb_g = Math.min(validate.rgb(input), 255);
		}
		if (type == 'rgb_b') {
			out.rgb_b = Math.min(validate.rgb(input), 255);
		}
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