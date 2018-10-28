const converter = require('./converter.js');
const validate = require('./validate.js');

module.exports = function(input, type) {
	const out = {};

	if (type == 'decimal') {
		out.decimal = validate.decimal(input);
		out.binary = converter.convertDecToBin(out.decimal);
		out.hexadecimal = converter.convertBinToHex(out.binary);
		out.octal = converter.convertBinToOct(out.binary);
		out.base256 = converter.convertBinTo256(out.binary);
	}
	else if (type == 'hexadecimal') {
		const hex = input.toUpperCase();
		out.hexadecimal = validate.hexadecimal(hex);
		out.binary = converter.convertHexToBin(out.hexadecimal);
		out.decimal = converter.convertBinToDec(out.hexadecimal);
		out.octal = converter.convertBinToOct(out.binary);
		out.base256 = converter.convertBinTo256(out.binary);
	}
	else if (type == 'binary') {
		out.binary = validate.binary(input);
		out.decimal = converter.convertBinToDec(out.binary);
		out.hexadecimal = converter.convertDecToHex(out.decimal);
		out.octal = converter.convertDecToOct(out.decimal);
		out.base256 = converter.convertDecTo256(out.decimal);
	}
	else if (type == 'octal') {
		out.octal = validate.octal(input);
		out.decimal = converter.convertOctToDec(out.octal);
		out.binary = converter.convertDecToBin(out.decimal);
		out.hexadecimal = converter.convertDecToHex(out.decimal);
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

	if (out.hexadecimal.length > 6) {
		out.color = '';
	}
	else {
		out.color = out.hexadecimal.padStart(6, '0');
	}

	return out;
}