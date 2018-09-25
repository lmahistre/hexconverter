const converter = require('../js/converter.js');

describe ('converter', function() {

	it ('convertDecToBin', function() {
		expect(converter.convertDecToBin(10)).toBe('1010');
		expect(converter.convertDecToBin(1235464)).toBe('100101101101000001000');
	});

	it ('convertHexToDec', function() {
		expect(converter.convertHexToDec('1')).toBe(1);
		expect(converter.convertHexToDec('11')).toBe(17);
		expect(converter.convertHexToDec('AE0')).toBe(2784);
	});

	it ('convertOctToDec', function() {
		expect(converter.convertOctToDec('1')).toBe(1);
		expect(converter.convertOctToDec('11')).toBe(9);
		expect(converter.convertOctToDec('274')).toBe(188);
	});

	it ('convertDecToHex', function() {
		expect(converter.convertDecToHex(10)).toBe('A');
		expect(converter.convertDecToHex(1505)).toBe('5E1');
	});

	it ('convertDecToOct', function() {
		expect(converter.convertDecToOct(10)).toBe('12');
		expect(converter.convertDecToOct(1505)).toBe('2741');
	});

	it ('convertDecTo256', function() {
		expect(converter.convertDecTo256(10)).toBe('10');
		expect(converter.convertDecTo256(1505)).toBe('5,225');
		expect(converter.convertDecTo256(1235464)).toBe('18,218,8');
	});

	it ('convertBinToDec', function() {
		expect(converter.convertBinToDec('1010')).toBe(10);
		expect(converter.convertBinToDec('100101101101000001000')).toBe(1235464);
	});
});