import * as converter from './converter';
import * as validate from './validate';
import colorsByCode from '../services/colors';

export default function(input, type) {
	const out = {};

	if (type === 'decimal') {
		out.decimal = validate.decimal(input);
		out.binary = converter.convertDecToBin(out.decimal);
		out.hexadecimal = converter.convertBinToHex(out.binary);
		out.octal = converter.convertBinToOct(out.binary);
		out.base256 = converter.convertBinTo256(out.binary);
		out.ascii = converter.convert256ToAscii(out.base256);
	}
	else if (type === 'hexadecimal') {
		out.hexadecimal = validate.hexadecimal(input);
		out.binary = converter.convertHexToBin(out.hexadecimal);
		out.decimal = converter.convertBinToDec(out.binary);
		out.octal = converter.convertBinToOct(out.binary);
		out.base256 = converter.convertBinTo256(out.binary);
		out.ascii = converter.convert256ToAscii(out.base256);
	}
	else if (type === 'binary') {
		out.binary = validate.binary(input);
		out.decimal = converter.convertBinToDec(out.binary);
		out.hexadecimal = converter.convertBinToHex(out.binary);
		out.octal = converter.convertBinToOct(out.binary);
		out.base256 = converter.convertBinTo256(out.binary);
		out.ascii = converter.convert256ToAscii(out.base256);
	}
	else if (type === 'octal') {
		out.octal = validate.octal(input);
		out.binary = converter.convertOctToBin(out.octal);
		out.decimal = converter.convertBinToDec(out.binary);
		out.hexadecimal = converter.convertBinToHex(out.binary);
		out.base256 = converter.convertBinTo256(out.binary);
		out.ascii = converter.convert256ToAscii(out.base256);
	}
	else if (type === 'base256') {
		out.base256 = validate.base256(input);
		out.binary = converter.convert256ToBin(out.base256);
		out.decimal = converter.convertBinToDec(out.binary);
		out.hexadecimal = converter.convertBinToHex(out.binary);
		out.octal = converter.convertBinToOct(out.binary);
		out.ascii = converter.convert256ToAscii(out.base256);
	}
	else if (type === 'ascii') {
		out.ascii = input;
		out.base256 = converter.convertAsciiTo256(out.ascii);
		out.binary = converter.convert256ToBin(out.base256);
		out.decimal = converter.convertBinToDec(out.binary);
		out.hexadecimal = converter.convertBinToHex(out.binary);
		out.octal = converter.convertBinToOct(out.binary);
	}
	else {
		return;
	}

	// Color
	if (out.hexadecimal.length > 6 || !out.hexadecimal.length) {
		out.color = '';
		out.colorName = '';
	}
	else {
		out.color = out.hexadecimal.padStart(6, '0');
		out.colorName = colorsByCode[out.color] ? colorsByCode[out.color] : '';
	}

	return out;
}