
const dom = require('./dom.js');

const intval = function(val) {
	let a = parseInt(val);
	if (isNaN(a)) {
		a = 0;
	}
	return a;
}

/**
 * Converts 1 decimal value (0 -> 15) to hexadecimal
 */
const decToHex = function(val) {
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


/**
 * Converts hexadecimal string to decimal
 */
const convertHexToDec = function(hex) {
	var htd = {
		'A' : 10,
		'B' : 11,
		'C' : 12,
		'D' : 13,
		'E' : 14,
		'F' : 15,
	};
	for (var i = 0; i < 10; i++) {
		htd[''+i] = i;
	};

	var dec = 0;
	var decValues = [];
	for (var i = hex.length - 1; i >= 0; i--) {
		decValues.push(htd[hex[i]]);
	};
	var exp = 1;
	for (var i = 0; i < decValues.length; i++) {
		dec += exp*decValues[i];
		exp *=16;
	};
	return dec;
}


const convertDecToBin = function(dec) {
	var bin = '';
	while (dec > 1) {
		bin = (dec % 2) + bin;
		dec = Math.floor(dec / 2);
	}
	bin = dec+bin;
	return bin;
}


const convertDecToHex = function(dec) {
	var hex = '';
	while (dec > 15) {
		hex = decToHex(dec % 16)+hex;
		dec = Math.floor(dec / 16);
	}
	hex = decToHex(dec)+hex;
	return hex;
}


const convertDecToOct = function(dec) {
	var oct = '';
	decT = dec;
	while (decT > 7) {
		oct = (decT % 8) + oct;
		decT = Math.floor(decT / 8);
	}
	oct = decT+oct;
	return oct;
}


/**
 * Converts values according to input
 */
const convert = function(input, type) {
	var out = {};

	// From decimal
	if (type == 'decimal') {
		var dec = intval(input);
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
		out.decimal = convertHexToDec(hex);
		out.binary = convertDecToBin(out.decimal);
		out.octal = convertDecToOct(out.decimal);
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
	else if (type == 'rgb_r' || type == 'rgb_g' || type == 'rgb_b') {
		out.rgb_r = Math.min(intval(document.getElementById('rgb_r').value), 255);
		out.rgb_g = Math.min(intval(document.getElementById('rgb_g').value), 255);
		out.rgb_b = Math.min(intval(document.getElementById('rgb_b').value), 255);
		out.hexadecimal = convertDecToHex(out.rgb_r).padStart(2,'0') + convertDecToHex(out.rgb_g).padStart(2,'0') + convertDecToHex(out.rgb_b).padStart(2,'0');
		out.decimal = convertHexToDec(out.hexadecimal);
		out.binary = convertDecToBin(out.decimal);
		out.octal = convertDecToOct(out.decimal);
	}
	else {
		return;
	}

	// Color
	if (type == 'rgb_r' || type == 'rgb_g' || type == 'rgb_b') {
		out.rgb_r = Math.min(intval(document.getElementById('rgb_r').value), 255);
		out.rgb_g = Math.min(intval(document.getElementById('rgb_g').value), 255);
		out.rgb_b = Math.min(intval(document.getElementById('rgb_b').value), 255);
		out.hexadecimal = convertDecToHex(out.rgb_r).padStart(2,'0') + convertDecToHex(out.rgb_g).padStart(2,'0') + convertDecToHex(out.rgb_b).padStart(2,'0');
		out.color = out.hexadecimal.padStart(6,'0');
	}
	else {
		if (out.hexadecimal.length > 6) {
			out.color = '';
			out.rgb_r = '';
			out.rgb_g = '';
			out.rgb_b = '';
		}
		else {
			const hexinput = out.hexadecimal.padStart(6, '0');
			out.color = hexinput;
			out.rgb_r = convertHexToDec(hexinput.slice(0,2));
			out.rgb_g = convertHexToDec(hexinput.slice(2,4));
			out.rgb_b = convertHexToDec(hexinput.slice(4,6));
		}
	}

	return out;
}


const updateFocus = function(event) {
	console.log(event.target.id);
	console.log(event.which);
	if (event.which != 9 && event.which != 16) {
		if (event.target.id == 'rgb_r' && document.getElementById('rgb_r').value.length >= 3) {
			document.getElementById('rgb_g').focus();
		}
		if (event.target.id == 'rgb_g' && document.getElementById('rgb_g').value.length >= 3) {
			document.getElementById('rgb_b').focus();
		}
	}
}


const openNewWindow = function() {
	try {
		var hexadecimal = document.getElementById('hexadecimal').value;
		var creating = browser.windows.create({
			height : 260,
			width : 340,
			url : 'index.html#'+hexadecimal,
			type : 'popup',
			// type : 'panel',
		});
	}
	catch (error) {
		alert(error.message);
	}
}


const updateValues = dom.updateValues;


/**
 * Updates the color indicator and the color name
 */
const updateColor = function(colorCode) {
	const colorsByCode = require('./colors.js');
	let colorName = '';
	if (colorCode.length > 0) {
		document.getElementById('color-indicator').style.backgroundColor = '#'+colorCode;
		if (colorsByCode[colorCode]) {
			colorName = colorsByCode[colorCode];
		}
	}
	else {
		document.getElementById('color-indicator').style.backgroundColor = null;
	}
	document.getElementById('color_name').textContent = colorName;
}


const init = function() {
	document.addEventListener("keyup", function(event) {
		updateValues(event.target.value, event.target.id);
		updateFocus(event);
	});
	document.getElementById('link_new_window').addEventListener('click', function(event) {
		openNewWindow();
	});

	setTimeout(function(){
		document.getElementById('decimal').focus();
	}, 100);

	// Hash
	var url = location.href;
	if (url.indexOf('#') > -1) {
		const hexadecimal = url.split('#')[1];
		if (hexadecimal.length > 0) {
			updateValues(hexadecimal, 'hexadecimal', false);
		}
		document.getElementsByClassName('actions')[0].remove();
	}
}


module.exports = {
	decToHex,
	convertDecToBin,
	init,
}