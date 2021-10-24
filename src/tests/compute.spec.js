import compute from '../js/services/compute.js';

describe('compute', function() {
	it ('type decimal', function() {
		const c = compute('1150', 'decimal');
		expect(c).toEqual({
			decimal : '1150',
			hexadecimal : '47E',
			binary : '10001111110',
			octal : '2176',
			base256 : '4,126',
			color: '00047E',
			colorName : '',
			ascii : "\u0004\u007E",
		});
	});

	it ('type hexadecimal', function() {
		const c = compute('47E', 'hexadecimal');
		expect(c).toEqual({
			decimal : '1150',
			hexadecimal : '47E',
			binary : '10001111110',
			octal : '2176',
			base256 : '4,126',
			color: '00047E',
			colorName : '',
			ascii : "\u0004\u007E",
		});
	});

	it ('type binary', function() {
		const c = compute('10001111110', 'binary');
		expect(c).toEqual({
			decimal : '1150',
			hexadecimal : '47E',
			binary : '10001111110',
			octal : '2176',
			base256 : '4,126',
			color: '00047E',
			colorName : '',
			ascii : "\u0004\u007E",
		});
	});

	it ('type octal', function() {
		const c = compute('2176', 'octal');
		expect(c).toEqual({
			decimal : '1150',
			hexadecimal : '47E',
			binary : '10001111110',
			octal : '2176',
			base256 : '4,126',
			color: '00047E',
			colorName : '',
			ascii : "\u0004\u007E",
		});
	});

	it ('type base256', function() {
		const c = compute('4,126', 'base256');
		expect(c).toEqual({
			decimal : '1150',
			hexadecimal : '47E',
			binary : '10001111110',
			octal : '2176',
			base256 : '4,126',
			color: '00047E',
			colorName : '',
			ascii : "\u0004\u007E",
		});
	});

	it ('type ascii', function() {
		const c = compute('abc', 'ascii');
		expect(c).toEqual({
			decimal : '6382179',
			hexadecimal : '616263',
			binary : '11000010110001001100011',
			octal : '30261143',
			base256 : '97,98,99',
			color: '616263',
			colorName : '',
			ascii : 'abc',
		});
	});
});