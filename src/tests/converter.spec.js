const converter = require('../js/converter.js');

describe ('converter', function() {

	it ('convertDecToBin', function() {
		expect(converter.convertDecToBin('10')).toBe('1010');
		expect(converter.convertDecToBin('1235464')).toBe('100101101101000001000');
		expect(converter.convertDecToBin('27619123480461230165623462192383623')).toBe('1010101000110111010010110010001011010111110111000011001110001101100001101101010101110110000011010101000011010000111');
	});

	it ('convertHexToDec', function() {
		expect(converter.convertHexToDec('1')).toBe('1');
		expect(converter.convertHexToDec('11')).toBe('17');
		expect(converter.convertHexToDec('AE0')).toBe('2784');
	});

	it ('convertOctToDec', function() {
		expect(converter.convertOctToDec('1')).toBe('1');
		expect(converter.convertOctToDec('11')).toBe('9');
		expect(converter.convertOctToDec('274')).toBe('188');
	});

	it ('convertDecToHex', function() {
		expect(converter.convertDecToHex('10')).toBe('A');
		expect(converter.convertDecToHex('1505')).toBe('5E1');
	});

	it ('convertDecToOct', function() {
		expect(converter.convertDecToOct('10')).toBe('12');
		expect(converter.convertDecToOct('1505')).toBe('2741');
	});

	it ('convertDecTo256', function() {
		expect(converter.convertDecTo256('10')).toBe('10');
		expect(converter.convertDecTo256('1505')).toBe('5,225');
		expect(converter.convertDecTo256('1235464')).toBe('18,218,8');
	});

	it ('convertBinToDec', function() {
		expect(converter.convertBinToDec('1010')).toBe(10);
		expect(converter.convertBinToDec('100101101101000001000')).toBe('1235464');
	});

	it ('convertBinToOct', function() {
		expect(converter.convertBinToOct('10')).toBe('2');
		expect(converter.convertBinToOct('1010')).toBe('12');
		expect(converter.convertBinToOct('10110')).toBe('26');
		expect(converter.convertBinToOct('1001101011011010001')).toBe('1153321');
		expect(converter.convertBinToOct('100101101101000001000')).toBe('4555010');
	});

	it ('convertBinTo256', function() {
		expect(converter.convertBinTo256('1010')).toBe('10');
		expect(converter.convertBinTo256('100101101101000001000')).toBe('18,218,8');
	});

	it ('convertBinToHex', function() {
		expect(converter.convertBinToHex('10')).toBe('2');
		expect(converter.convertBinToHex('1010')).toBe('A');
		expect(converter.convertBinToHex('10110')).toBe('16');
		expect(converter.convertBinToHex('100101101101000001000')).toBe('12DA08');
		expect(converter.convertBinToHex('100100101101101000001000')).toBe('92DA08');
	});

	it ('convertHexToBin', function() {
		expect(converter.convertHexToBin('2')).toBe('10');
		expect(converter.convertHexToBin('A')).toBe('1010');
		expect(converter.convertHexToBin('16')).toBe('10110');
		expect(converter.convertHexToBin('12DA08')).toBe('100101101101000001000');
		expect(converter.convertHexToBin('92DA08')).toBe('100100101101101000001000');
	});
});