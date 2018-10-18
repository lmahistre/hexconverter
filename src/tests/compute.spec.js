const compute = require('../js/compute.js');

describe('compute', function() {
	it ('type decimal', function() {
		const c = compute(1150, 'decimal');
		expect(c).toEqual({
			decimal : 1150,
			hexadecimal : '47E',
			binary : '10001111110',
			octal : '2176',
			color: '00047E',
			rgb_r: 0,
			rgb_g: 4,
			rgb_b: 126,
			base256 : '4,126',
		});
	});

	it ('type hexadecimal', function() {
		const c = compute('47E', 'hexadecimal');
		expect(c).toEqual({
			decimal : 1150,
			hexadecimal : '47E',
			binary : '10001111110',
			octal : '2176',
			color: '00047E',
			rgb_r: 0,
			rgb_g: 4,
			rgb_b: 126,
			base256 : '4,126',
		});
	});

	it ('type binary', function() {
		const c = compute('10001111110', 'binary');
		expect(c).toEqual({
			decimal : 1150,
			hexadecimal : '47E',
			binary : '10001111110',
			octal : '2176',
			color: '00047E',
			rgb_r: 0,
			rgb_g: 4,
			rgb_b: 126,
			base256 : '4,126',
		});
	});

	it ('type octal', function() {
		const c = compute('2176', 'octal');
		expect(c).toEqual({
			decimal : 1150,
			hexadecimal : '47E',
			binary : '10001111110',
			octal : '2176',
			color: '00047E',
			rgb_r: 0,
			rgb_g: 4,
			rgb_b: 126,
			base256 : '4,126',
		});
	});

	it ('type base256', function() {
		const c = compute('4,126', 'base256');
		expect(c).toEqual({
			decimal : 1150,
			hexadecimal : '47E',
			binary : '10001111110',
			octal : '2176',
			color: '00047E',
			rgb_r: 0,
			rgb_g: 4,
			rgb_b: 126,
			base256 : '4,126',
		});
	});
});