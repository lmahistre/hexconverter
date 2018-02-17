
const colorsByCode = {"F0F8FF":"AliceBlue","FAEBD7":"AntiqueWhite","00FFFF":"Cyan","7FFFD4":"Aquamarine","F0FFFF":"Azure","F5F5DC":"Beige","FFE4C4":"Bisque","000000":"Black","FFEBCD":"BlanchedAlmond","0000FF":"Blue","8A2BE2":"BlueViolet","A52A2A":"Brown","DEB887":"BurlyWood","5F9EA0":"CadetBlue","7FFF00":"Chartreuse","D2691E":"Chocolate","FF7F50":"Coral","6495ED":"CornflowerBlue","FFF8DC":"Cornsilk","DC143C":"Crimson","00008B":"DarkBlue","008B8B":"DarkCyan","B8860B":"DarkGoldenRod","A9A9A9":"DarkGrey","006400":"DarkGreen","BDB76B":"DarkKhaki","8B008B":"DarkMagenta","556B2F":"DarkOliveGreen","FF8C00":"DarkOrange","9932CC":"DarkOrchid","8B0000":"DarkRed","E9967A":"DarkSalmon","8FBC8F":"DarkSeaGreen","483D8B":"DarkSlateBlue","2F4F4F":"DarkSlateGrey","00CED1":"DarkTurquoise","9400D3":"DarkViolet","FF1493":"DeepPink","00BFFF":"DeepSkyBlue","696969":"DimGrey","1E90FF":"DodgerBlue","B22222":"FireBrick","FFFAF0":"FloralWhite","228B22":"ForestGreen","FF00FF":"Magenta","DCDCDC":"Gainsboro","F8F8FF":"GhostWhite","FFD700":"Gold","DAA520":"GoldenRod","808080":"Grey","008000":"Green","ADFF2F":"GreenYellow","F0FFF0":"HoneyDew","FF69B4":"HotPink","CD5C5C":"IndianRed","4B0082":"Indigo","FFFFF0":"Ivory","F0E68C":"Khaki","E6E6FA":"Lavender","FFF0F5":"LavenderBlush","7CFC00":"LawnGreen","FFFACD":"LemonChiffon","ADD8E6":"LightBlue","F08080":"LightCoral","E0FFFF":"LightCyan","FAFAD2":"LightGoldenRodYellow","D3D3D3":"LightGrey","90EE90":"LightGreen","FFB6C1":"LightPink","FFA07A":"LightSalmon","20B2AA":"LightSeaGreen","87CEFA":"LightSkyBlue","778899":"LightSlateGrey","B0C4DE":"LightSteelBlue","FFFFE0":"LightYellow","00FF00":"Lime","32CD32":"LimeGreen","FAF0E6":"Linen","800000":"Maroon","66CDAA":"MediumAquaMarine","0000CD":"MediumBlue","BA55D3":"MediumOrchid","9370DB":"MediumPurple","3CB371":"MediumSeaGreen","7B68EE":"MediumSlateBlue","00FA9A":"MediumSpringGreen","48D1CC":"MediumTurquoise","C71585":"MediumVioletRed","191970":"MidnightBlue","F5FFFA":"MintCream","FFE4E1":"MistyRose","FFE4B5":"Moccasin","FFDEAD":"NavajoWhite","000080":"Navy","FDF5E6":"OldLace","808000":"Olive","6B8E23":"OliveDrab","FFA500":"Orange","FF4500":"OrangeRed","DA70D6":"Orchid","EEE8AA":"PaleGoldenRod","98FB98":"PaleGreen","AFEEEE":"PaleTurquoise","DB7093":"PaleVioletRed","FFEFD5":"PapayaWhip","FFDAB9":"PeachPuff","CD853F":"Peru","FFC0CB":"Pink","DDA0DD":"Plum","B0E0E6":"PowderBlue","800080":"Purple","663399":"RebeccaPurple","FF0000":"Red","BC8F8F":"RosyBrown","4169E1":"RoyalBlue","8B4513":"SaddleBrown","FA8072":"Salmon","F4A460":"SandyBrown","2E8B57":"SeaGreen","FFF5EE":"SeaShell","A0522D":"Sienna","C0C0C0":"Silver","87CEEB":"SkyBlue","6A5ACD":"SlateBlue","708090":"SlateGrey","FFFAFA":"Snow","00FF7F":"SpringGreen","4682B4":"SteelBlue","D2B48C":"Tan","008080":"Teal","D8BFD8":"Thistle","FF6347":"Tomato","40E0D0":"Turquoise","EE82EE":"Violet","F5DEB3":"Wheat","FFFFFF":"White","F5F5F5":"WhiteSmoke","FFFF00":"Yellow","9ACD32":"YellowGreen"};

function intval(val) {
	let a = parseInt(val);
	if (isNaN(a)) {
		a = 0;
	}
	return a;
}

/**
 * Converts 1 decimal value (0 -> 15) to hexadecimal
 */
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


/**
 * Converts hexadecimal string to decimal
 */
function convertHexToDec(hex) {
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


/**
 * Converts values according to input
 */
function convert(input, type) {
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


function updateFocus(event) {
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


function openNewWindow() {
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


function updateValues(inputValue, id) {
	var out = convert(inputValue, id);
	if (out) {
		for (var id in out) {
			let elt = document.getElementById(id);
			if (elt) {
				elt.value = out[id];
			}
		}
		updateColor(out.color);
	}
}


/**
 * Updates the color indicator and the color name
 */
function updateColor(colorCode) {
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


function init() {
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


document.addEventListener("DOMContentLoaded", init);
