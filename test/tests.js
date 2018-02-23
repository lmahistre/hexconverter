const hexc = require('../src/hexc.js');

QUnit.test( "decToHex 0", function( assert) {
	assert.equal(hexc.decToHex(0), 0);
});

QUnit.test( "decToHex 10", function( assert ) {
	assert.equal(hexc.decToHex(10), 'A');
});

QUnit.test( "convertDecToBin 10", function( assert ) {
	assert.equal(convertDecToBin(10), '1010');
});
