const tools = require('../js/services/tools.js');

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
		expect(tools.divBy2('7')).toBe('3');
		expect(tools.divBy2('72131313615431548131854542896')).toBe('36065656807715774065927271448');
		expect(tools.divBy2('72131313615431548131854542897')).toBe('36065656807715774065927271448');
	});

	it ('multiplyBy2', function() {
		expect(tools.multiplyBy2('')).toBe('');
		expect(tools.multiplyBy2('3')).toBe('6');
		expect(tools.multiplyBy2('36065656807715774065927271448')).toBe('72131313615431548131854542896');
	});

	it ('add1', function() {
		expect(tools.add1('')).toBe('1');
		expect(tools.add1('3')).toBe('4');
		expect(tools.add1('3138549')).toBe('3138550');
		expect(tools.add1('3138599')).toBe('3138600');
		expect(tools.add1('999')).toBe('1000');
		expect(tools.add1('36065656807715774065927271448')).toBe('36065656807715774065927271449');
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

	it ('decToHex', function() {
		expect(tools.decToHex(0)).toBe('0');
		expect(tools.decToHex(10)).toBe('A');
	});


	it ('hexToDec', function() {
		expect(tools.hexToDec('0')).toBe(0);
		expect(tools.hexToDec('A')).toBe(10);
	});

	it ('binToDec', function() {
		expect(tools.binToDec('1010')).toBe(10);
		expect(tools.binToDec('100101101101000001000')).toBe(1235464);
	});

	it ('binToHex', function() {
		expect(tools.binToHex('0')).toBe('0');
		expect(tools.binToHex('0010')).toBe('2');
		expect(tools.binToHex('10')).toBe('2');
		expect(tools.binToHex('1010')).toBe('A');
		expect(tools.binToHex('1111')).toBe('F');
	});

	it ('trim0', function() {
		expect(tools.trim0('0000000100101')).toBe('100101');
		expect(tools.trim0('0100101')).toBe('100101');
		expect(tools.trim0('101')).toBe('101');
		expect(tools.trim0('0000055')).toBe('55');
		expect(tools.trim0('00000550')).toBe('550');
		expect(tools.trim0('42')).toBe('42');
	});
});