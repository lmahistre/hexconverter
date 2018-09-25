const validate = require('../js/validate.js');

describe ('validate', function() {
	it ('decimal', function() {
		expect(validate.decimal(3)).toBe(3);
		expect(validate.decimal('3')).toBe(3);
		expect(validate.decimal('3.45')).toBe(3);
		expect(validate.decimal('')).toBe(0);
	});

	it ('octal', function() {
		expect(validate.octal(3)).toBe('3');
		expect(validate.octal(11)).toBe('11');
		expect(validate.octal('11')).toBe('11');
		expect(validate.octal('')).toBe('');
		expect(validate.octal('f')).toBe('');
	});
});