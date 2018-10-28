const validate = require('../js/validate.js');

describe ('validate', function() {
	it ('decimal', function() {
		expect(validate.decimal(3)).toBe('3');
		expect(validate.decimal('3')).toBe('3');
		expect(validate.decimal('3.45')).toBe('345');
		expect(validate.decimal('')).toBe('');
	});

	it ('binary', function() {
		expect(validate.binary('3')).toBe('');
		expect(validate.binary('11')).toBe('11');
		expect(validate.binary('11')).toBe('11');
		expect(validate.binary('')).toBe('');
		expect(validate.binary('f')).toBe('');
		expect(validate.binary('f2010gg')).toBe('010');
	});

	it ('octal', function() {
		expect(validate.octal(3)).toBe('3');
		expect(validate.octal(11)).toBe('11');
		expect(validate.octal('11')).toBe('11');
		expect(validate.octal('')).toBe('');
		expect(validate.octal('f')).toBe('');
	});
});