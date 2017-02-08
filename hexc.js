
function decToHex(val) {
	var chars = {
		10 : 'A',
		11 : 'B',
		12 : 'C',
		13 : 'D',
		14 : 'E',
		15 : 'F',
	};
	if (val < 10) {
		return val;
	}
	else {
		return chars[val];
	}
}


function convertDecToBin(dec) {
	var bin = '';
	while (dec > 1) {
		bin = (dec % 2) + bin;
		dec = Math.floor(dec / 2);
	}
	bin = dec+bin;
	return bin;
}


function convertDecToHex(dec) {
	var hex = '';
	while (dec > 15) {
		hex = decToHex(dec % 16)+hex;
		dec = Math.floor(dec / 16);
	}
	hex = decToHex(dec)+hex;
	return hex;
}


function convertDecToOct(dec) {
	var oct = '';
	decT = dec;
	while (decT > 7) {
		oct = (decT % 8) + oct;
		decT = Math.floor(decT / 8);
	}
	oct = decT+oct;
	return oct;
}


function convert(input, type) {
	var out = {};

	// From decimal
	if (type == 'decimal') {
		var dec = parseInt(input);
		if (isNaN(dec)) {
			dec = 0;
		}
		out.decimal = dec;

		out.hexadecimal = convertDecToHex(dec);
		out.binary = convertDecToBin(dec);
		out.octal = convertDecToOct(dec);
	}

	// From hexadecimal
	else if (type == 'hexadecimal') {
		var hex = input.toUpperCase();
		hex = hex.replace(/[^A-F0-9]/g, '');
		out.hexadecimal = hex;

		// to decimal
		var hexToDec = {
			'A' : 10,
			'B' : 11,
			'C' : 12,
			'D' : 13,
			'E' : 14,
			'F' : 15,
		};
		for (var i = 0; i < 10; i++) {
			hexToDec[''+i] = i;
		};

		var dec = 0;
		var decValues = [];
		for (var i = hex.length - 1; i >= 0; i--) {
			decValues.push(hexToDec[hex[i]]);
		};
		var exp = 1;
		for (var i = 0; i < decValues.length; i++) {
			dec += exp*decValues[i];
			exp *=16;
		};
		out.decimal = dec;

		out.binary = convertDecToBin(dec);
		out.octal = convertDecToOct(dec);
	}

	// From binary
	else if (type == 'binary') {
		var bin = input.replace(/[^01]/g, '');
		out.binary = bin;

		// To decimal
		var dec = 0;
		var exp = 1;
		for (var i = bin.length - 1; i >= 0; i--) {
			dec += exp*bin[i];
			exp *= 2;
		};
		out.decimal = dec;

		out.hexadecimal = convertDecToHex(dec);
		out.octal = convertDecToOct(dec);
	}

	// From octal
	else if (type == 'octal') {
		var oct = input.replace(/[^0-7]/g, '');
		out.octal = oct;

		// To decimal
		var dec = 0;
		var exp = 1;
		for (var i = oct.length - 1; i >= 0; i--) {
			dec += exp*oct[i];
			exp *= 8;
		};
		out.decimal = dec;

		out.binary = convertDecToBin(dec);
		out.hexadecimal = convertDecToHex(dec);
	}
	return out;
}


document.addEventListener("keyup", function(event) {
	var out = convert(event.target.value, event.target.id);
	for (var id in out) {
		document.getElementById(id).value = out[id];
	}
});

