
describe ('utils', function() {
	const hexc = require('../js/hexc.js');
	it ('renameProject', function() {
		expect(hexc.decToHex(0)).toBe(0);
		expect(hexc.decToHex(10)).toBe('A');
		expect(hexc.convertDecToBin(10)).toBe('1010');
	});
});