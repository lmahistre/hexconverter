const tools = require('../src/js/tools.js');

describe('tools', function() {
	it ('intval', function() {
		expect(tools.intval('15')).toBe(15);
		expect(tools.intval('14.4')).toBe(14);
		expect(tools.intval('f')).toBe(0);
		expect(tools.intval('')).toBe(0);
	});

	it ('modulo2', function() {
		expect(tools.modulo2('21')).toBe(1);
		expect(tools.modulo2('1232342342345345345621')).toBe(1);
		expect(tools.modulo2('1232342342345345345626')).toBe(0);
	});

	it ('divBy2', function() {
		expect(tools.divBy2(7)).toBe('3');
		expect(tools.divBy2('72131313615431548131854542896')).toBe('36065656807715774065927271448');
		expect(tools.divBy2('72131313615431548131854542897')).toBe('36065656807715774065927271448');
	});

	it ('filter0', function() {
		expect(tools.filter0('0000055')).toBe('55');
		expect(tools.filter0('00000550')).toBe('550');
		expect(tools.filter0('42')).toBe('42');
	});

	it ('higherThan1', function() {
		expect(tools.higherThan1('42')).toBe(true);
		expect(tools.higherThan1('1')).toBe(false);
		expect(tools.higherThan1('42165165606')).toBe(true);
	});

	it ('toBin', function() {
		expect(tools.toBin(10)).toBe('1010');
		expect(tools.toBin(1235464)).toBe('100101101101000001000');
		expect(tools.toBin('72131313615431548131854542897')).toBe('111010010001000110011111110010100100110111100000011110011111110001000100100010000110100000110001');
	});
});