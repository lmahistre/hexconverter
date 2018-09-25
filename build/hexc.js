/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


exports.intval = function(val) {
	let a = parseInt(val);
	if (isNaN(a)) {
		a = 0;
	}
	return a;
}


exports.modulo2 = function(dec) {
	const inp = ''+dec;
	const len = inp.length;
	const mod = parseInt(inp[(len-1)])%2;
	return mod;
}


exports.divBy2 = function(dec) {
	const inp = ''+dec;
	let aOut = [];
	for (let i = inp.length - 1; i >= 0; i--) {
		let mod = inp[i]%2;
		if (mod && i<inp.length-1) {
			aOut[i+1] += 5;
		}
		aOut[i] = parseInt(inp[i]/2);
	}
	return exports.filter0(aOut.join(''));
}


exports.filter0 = function(str) {
	while (str.charAt(0) === '0') {
		str = str.substr(1);
	}
	return str;
}


exports.higherThan1 = function(dec) {
	const inp = ''+dec;
	if (inp.length > 1) {
		return true;
	}
	if (parseInt(inp[inp.length-1]) > 1) {
		return true;
	}
	return false;
}


exports.toBin = function(dec) {
	let inp = ''+dec;
	let bin = '';
	while (exports.higherThan1(inp)) {
		bin = (exports.modulo2(inp)) + bin;
		inp = exports.divBy2(inp);
	}
	bin = inp+bin;
	return bin;
}


exports.decToHex = function(val) {
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


const colorsByCode = __webpack_require__(6);

const updateColor = function(colorCode) {
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


const setKeyUp = function(fn) {
	document.addEventListener("keyup", fn);
}


const setLinkNewWindowClickEvent = function(fn) {
	document.getElementById('link_new_window').addEventListener('click', fn);
}


const setDOMContentLoadedEvent = function(fn) {
	document.addEventListener("DOMContentLoaded", fn);
}


const getHexadecimalValue = function() {
	return document.getElementById('hexadecimal').value;
}


const getRgbRValue = function() {
	return intval(document.getElementById('rgb_r').value);
}


const getBase256Value = function() {
	return document.getElementById('base256').value;
}


const updateFocus = function(event) {
	if (event.which != 9 && event.which != 16) {
		if (event.target.id == 'rgb_r' && document.getElementById('rgb_r').value.length >= 3) {
			document.getElementById('rgb_g').focus();
		}
		if (event.target.id == 'rgb_g' && document.getElementById('rgb_g').value.length >= 3) {
			document.getElementById('rgb_b').focus();
		}
	}
}


const getUrlHexadecimalValue = function() {
	const url = location.href;
	if (url.indexOf('#') > -1) {
		const hexadecimal = url.split('#')[1];
		if (hexadecimal.length > 0) {
			return hexadecimal;
		}
	}
	return false;
}


const removeActionsBlock = function () {
	document.getElementsByClassName('actions')[0].remove();
}


const focusDecimal = function() {
	document.getElementById('decimal').focus();
}


const setValues = function(out) {
	for (var id in out) {
		let elt = document.getElementById(id);
		if (elt) {
			elt.value = out[id];
		}
	}
}


const isToolbar = function() {
	return location.href.indexOf('#') === -1 && typeof browser !== 'undefined';
}


module.exports = {
	getUrlHexadecimalValue,
	updateColor,
	getHexadecimalValue,
	setDOMContentLoadedEvent,
	updateFocus,
	setKeyUp,
	setLinkNewWindowClickEvent,
	focusDecimal,
	setValues,
	isToolbar,
	removeActionsBlock,
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(0);

exports.decimal = function(inp) {
	let a = parseInt(inp);
	if (isNaN(a)) {
		a = 0;
	}
	a = Math.max(0, a);
	return a;
}


exports.octal = function(inp) {
	return (''+inp).replace(/[^0-7]/g, '');
}


exports.hexadecimal = function(inp) {
	return inp.replace(/[^A-F0-9]/g, '');
}

exports.binary = function(input) {
	return input.replace(/[^01]/g, '');
}


exports.base256 = function(inp) {
	let base256 = inp.replace(/[^0-9,]/g, '');
	let ab256 = base256.split(',');
	for (let i=0; i<ab256.length; i++) {
		ab256[i] = exports.decimal(ab256[i]);
		ab256[i] = Math.min(255, ab256[i]);
	}
	return ab256.join(',');
}


exports.rgb = tools.intval;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const tools = __webpack_require__(0);

exports.convertBinToDec = function(bin) {
	let dec = 0;
	let exp = 1;
	for (var i = bin.length - 1; i >= 0; i--) {
		dec += exp*bin[i];
		exp *= 2;
	};
	return dec;
}


exports.convertHexToDec = function(hex) {
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


exports.convertOctToDec = function(oct) {
	let dec = 0;
	let exp = 1;
	for (var i = oct.length - 1; i >= 0; i--) {
		dec += exp*oct[i];
		exp *= 8;
	};
	return dec;
}


exports.convert256ToDec = function(b256) {
	const inp = b256.split(',');
	let dec = 0;
	let exp = 1;
	for (var i = inp.length - 1; i >= 0; i--) {
		dec += exp*inp[i];
		exp *= 256;
	};
	return dec;
}


// exports.convertDecToBin = function(dec) {
// 	var bin = '';
// 	while (dec > 1) {
// 		bin = (dec % 2) + bin;
// 		dec = Math.floor(dec / 2);
// 	}
// 	bin = dec+bin;
// 	return bin;
// }


exports.convertDecToBin = function(dec) {
	let inp = ''+dec;
	let bin = '';
	while (tools.higherThan1(inp)) {
		bin = (tools.modulo2(inp)) + bin;
		inp = tools.divBy2(inp);
	}
	bin = inp+bin;
	return bin;
}


exports.convertDecToHex = function(dec) {
	var hex = '';
	while (dec > 15) {
		hex = tools.decToHex(dec % 16)+hex;
		dec = Math.floor(dec / 16);
	}
	hex = tools.decToHex(dec)+hex;
	return hex;
}


exports.convertDecToOct = function(dec) {
	var oct = '';
	let decT = dec;
	while (decT > 7) {
		oct = (decT % 8) + oct;
		decT = Math.floor(decT / 8);
	}
	oct = decT+oct;
	return oct;
}


exports.convertDecTo256 = function(dec) {
	let sb256  = '';
	let ab256 = [];
	let decT = dec;
	while (decT > 0) {
		ab256.unshift(decT % 256);
		// sb256 = (decT % 256) + sb256;
		decT = Math.floor(decT / 256);
	}
	// ab256.push(decT % 256);
	sb256 = ab256.join(',');
	return sb256;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const converter = __webpack_require__(3);
const validate = __webpack_require__(2);
// const dom = require('./dom.js');

module.exports = function(input, type) {
	var out = {};

	// From decimal
	if (type == 'decimal') {
		out.decimal = validate.decimal(input);
		out.hexadecimal = converter.convertDecToHex(out.decimal);
		out.binary = converter.convertDecToBin(out.decimal);
		out.octal = converter.convertDecToOct(out.decimal);
		out.base256 = converter.convertDecTo256(out.decimal);
	}

	// From hexadecimal
	else if (type == 'hexadecimal') {
		var hex = input.toUpperCase();
		hex = validate.hexadecimal(hex);
		out.hexadecimal = hex;
		out.decimal = converter.convertHexToDec(hex);
		out.binary = converter.convertDecToBin(out.decimal);
		out.octal = converter.convertDecToOct(out.decimal);
		out.base256 = converter.convertDecTo256(out.decimal);
	}

	// From binary
	else if (type == 'binary') {
		out.binary = validate.binary(input);
		out.decimal = converter.convertBinToDec(out.binary);
		out.hexadecimal = converter.convertDecToHex(out.decimal);
		out.octal = converter.convertDecToOct(out.decimal);
		out.base256 = converter.convertDecTo256(out.decimal);
	}

	// From octal
	else if (type == 'octal') {
		// out.octal = input.replace(/[^0-7]/g, '');
		out.octal = validate.octal(input);
		out.decimal = converter.convertOctToDec(out.octal);
		out.binary = converter.convertDecToBin(out.decimal);
		out.hexadecimal = converter.convertDecToHex(out.decimal);
		out.base256 = converter.convertDecTo256(out.decimal);
	}
	else if (type == 'rgb_r' || type == 'rgb_g' || type == 'rgb_b') {
		if (type == 'rgb_r') {
			out.rgb_r = Math.min(validate.rgb(input), 255);
		}
		if (type == 'rgb_g') {
			out.rgb_g = Math.min(validate.rgb(input), 255);
		}
		if (type == 'rgb_b') {
			out.rgb_b = Math.min(validate.rgb(input), 255);
		}
		// out.rgb_g = Math.min(converter.intval(document.getElementById('rgb_g').value), 255);
		// out.rgb_b = Math.min(converter.intval(document.getElementById('rgb_b').value), 255);
		out.hexadecimal = converter.convertDecToHex(out.rgb_r).padStart(2,'0') + converter.convertDecToHex(out.rgb_g).padStart(2,'0') + converter.convertDecToHex(out.rgb_b).padStart(2,'0');
		out.decimal = converter.convertHexToDec(out.hexadecimal);
		out.binary = converter.convertDecToBin(out.decimal);
		out.octal = converter.convertDecToOct(out.decimal);
		out.base256 = converter.convertDecTo256(out.decimal);
	}
	else if (type == 'base256') {
		out.base256 = validate.base256(input);
		out.decimal = converter.convert256ToDec(out.base256);
		out.hexadecimal = converter.convertDecToHex(out.decimal);
		out.binary = converter.convertDecToBin(out.decimal);
		out.octal = converter.convertDecToOct(out.decimal);
	}
	else {
		return;
	}

	// Color
	if (type == 'rgb_r' || type == 'rgb_g' || type == 'rgb_b') {
		out.rgb_r = Math.min(converter.intval(document.getElementById('rgb_r').value), 255);
		out.rgb_g = Math.min(converter.intval(document.getElementById('rgb_g').value), 255);
		out.rgb_b = Math.min(converter.intval(document.getElementById('rgb_b').value), 255);
		out.hexadecimal = converter.convertDecToHex(out.rgb_r).padStart(2,'0') + converter.convertDecToHex(out.rgb_g).padStart(2,'0') + converter.convertDecToHex(out.rgb_b).padStart(2,'0');
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
			out.rgb_r = converter.convertHexToDec(hexinput.slice(0,2));
			out.rgb_g = converter.convertHexToDec(hexinput.slice(2,4));
			out.rgb_b = converter.convertHexToDec(hexinput.slice(4,6));
		}
	}

	return out;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const dom = __webpack_require__(1);
const compute = __webpack_require__(4);

exports.openNewWindow = function(event) {
	try {
		const creating = browser.windows.create({
			height : 260,
			width : 340,
			url : 'index.html#'+dom.getHexadecimalValue(),
			type : 'popup',
		});
	}
	catch (error) {
		alert(error.message);
	}
}


exports.updateValues = function(inputValue, id) {
	var out = compute(inputValue, id);
	if (out) {
		dom.setValues(out);
		dom.updateColor(out.color);
	}
}


exports.onChange = function(event) {
	exports.updateValues(event.target.value, event.target.id);
	dom.updateFocus(event);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
	"F0F8FF":"AliceBlue",
	"FAEBD7":"AntiqueWhite",
	"00FFFF":"Cyan",
	"7FFFD4":"Aquamarine",
	"F0FFFF":"Azure",
	"F5F5DC":"Beige",
	"FFE4C4":"Bisque",
	"000000":"Black",
	"FFEBCD":"BlanchedAlmond",
	"0000FF":"Blue",
	"8A2BE2":"BlueViolet",
	"A52A2A":"Brown",
	"DEB887":"BurlyWood",
	"5F9EA0":"CadetBlue",
	"7FFF00":"Chartreuse",
	"D2691E":"Chocolate",
	"FF7F50":"Coral",
	"6495ED":"CornflowerBlue",
	"FFF8DC":"Cornsilk",
	"DC143C":"Crimson",
	"00008B":"DarkBlue",
	"008B8B":"DarkCyan",
	"B8860B":"DarkGoldenRod",
	"A9A9A9":"DarkGrey",
	"006400":"DarkGreen",
	"BDB76B":"DarkKhaki",
	"8B008B":"DarkMagenta",
	"556B2F":"DarkOliveGreen",
	"FF8C00":"DarkOrange",
	"9932CC":"DarkOrchid",
	"8B0000":"DarkRed",
	"E9967A":"DarkSalmon",
	"8FBC8F":"DarkSeaGreen",
	"483D8B":"DarkSlateBlue",
	"2F4F4F":"DarkSlateGrey",
	"00CED1":"DarkTurquoise",
	"9400D3":"DarkViolet",
	"FF1493":"DeepPink",
	"00BFFF":"DeepSkyBlue",
	"696969":"DimGrey",
	"1E90FF":"DodgerBlue",
	"B22222":"FireBrick",
	"FFFAF0":"FloralWhite",
	"228B22":"ForestGreen",
	"FF00FF":"Magenta",
	"DCDCDC":"Gainsboro",
	"F8F8FF":"GhostWhite",
	"FFD700":"Gold",
	"DAA520":"GoldenRod",
	"808080":"Grey",
	"008000":"Green",
	"ADFF2F":"GreenYellow",
	"F0FFF0":"HoneyDew",
	"FF69B4":"HotPink",
	"CD5C5C":"IndianRed",
	"4B0082":"Indigo",
	"FFFFF0":"Ivory",
	"F0E68C":"Khaki",
	"E6E6FA":"Lavender",
	"FFF0F5":"LavenderBlush",
	"7CFC00":"LawnGreen",
	"FFFACD":"LemonChiffon",
	"ADD8E6":"LightBlue",
	"F08080":"LightCoral",
	"E0FFFF":"LightCyan",
	"FAFAD2":"LightGoldenRodYellow",
	"D3D3D3":"LightGrey",
	"90EE90":"LightGreen",
	"FFB6C1":"LightPink",
	"FFA07A":"LightSalmon",
	"20B2AA":"LightSeaGreen",
	"87CEFA":"LightSkyBlue",
	"778899":"LightSlateGrey",
	"B0C4DE":"LightSteelBlue",
	"FFFFE0":"LightYellow",
	"00FF00":"Lime",
	"32CD32":"LimeGreen",
	"FAF0E6":"Linen",
	"800000":"Maroon",
	"66CDAA":"MediumAquaMarine",
	"0000CD":"MediumBlue",
	"BA55D3":"MediumOrchid",
	"9370DB":"MediumPurple",
	"3CB371":"MediumSeaGreen",
	"7B68EE":"MediumSlateBlue",
	"00FA9A":"MediumSpringGreen",
	"48D1CC":"MediumTurquoise",
	"C71585":"MediumVioletRed",
	"191970":"MidnightBlue",
	"F5FFFA":"MintCream",
	"FFE4E1":"MistyRose",
	"FFE4B5":"Moccasin",
	"FFDEAD":"NavajoWhite",
	"000080":"Navy",
	"FDF5E6":"OldLace",
	"808000":"Olive",
	"6B8E23":"OliveDrab",
	"FFA500":"Orange",
	"FF4500":"OrangeRed",
	"DA70D6":"Orchid",
	"EEE8AA":"PaleGoldenRod",
	"98FB98":"PaleGreen",
	"AFEEEE":"PaleTurquoise",
	"DB7093":"PaleVioletRed",
	"FFEFD5":"PapayaWhip",
	"FFDAB9":"PeachPuff",
	"CD853F":"Peru",
	"FFC0CB":"Pink",
	"DDA0DD":"Plum",
	"B0E0E6":"PowderBlue",
	"800080":"Purple",
	"663399":"RebeccaPurple",
	"FF0000":"Red",
	"BC8F8F":"RosyBrown",
	"4169E1":"RoyalBlue",
	"8B4513":"SaddleBrown",
	"FA8072":"Salmon",
	"F4A460":"SandyBrown",
	"2E8B57":"SeaGreen",
	"FFF5EE":"SeaShell",
	"A0522D":"Sienna",
	"C0C0C0":"Silver",
	"87CEEB":"SkyBlue",
	"6A5ACD":"SlateBlue",
	"708090":"SlateGrey",
	"FFFAFA":"Snow",
	"00FF7F":"SpringGreen",
	"4682B4":"SteelBlue",
	"D2B48C":"Tan",
	"008080":"Teal",
	"D8BFD8":"Thistle",
	"FF6347":"Tomato",
	"40E0D0":"Turquoise",
	"EE82EE":"Violet",
	"F5DEB3":"Wheat",
	"FFFFFF":"White",
	"F5F5F5":"WhiteSmoke",
	"FFFF00":"Yellow",
	"9ACD32":"YellowGreen",
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const dom = __webpack_require__(1);
const events = __webpack_require__(5);

dom.setDOMContentLoadedEvent(function() {
	dom.setKeyUp(events.onChange);
	dom.setLinkNewWindowClickEvent(events.openNewWindow);

	setTimeout(dom.focusDecimal, 100);
	const hexadecimal = dom.getUrlHexadecimalValue()
	if (hexadecimal) {
		events.updateValues(hexadecimal, 'hexadecimal', false);
	}
	if (!dom.isToolbar()) {
		dom.removeActionsBlock();
	}
});

/***/ })
/******/ ]);