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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/colors.js":
/*!**************************!*\
  !*** ./src/js/colors.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"F0F8FF\":\"AliceBlue\",\n\t\"FAEBD7\":\"AntiqueWhite\",\n\t\"00FFFF\":\"Cyan\",\n\t\"7FFFD4\":\"Aquamarine\",\n\t\"F0FFFF\":\"Azure\",\n\t\"F5F5DC\":\"Beige\",\n\t\"FFE4C4\":\"Bisque\",\n\t\"000000\":\"Black\",\n\t\"FFEBCD\":\"BlanchedAlmond\",\n\t\"0000FF\":\"Blue\",\n\t\"8A2BE2\":\"BlueViolet\",\n\t\"A52A2A\":\"Brown\",\n\t\"DEB887\":\"BurlyWood\",\n\t\"5F9EA0\":\"CadetBlue\",\n\t\"7FFF00\":\"Chartreuse\",\n\t\"D2691E\":\"Chocolate\",\n\t\"FF7F50\":\"Coral\",\n\t\"6495ED\":\"CornflowerBlue\",\n\t\"FFF8DC\":\"Cornsilk\",\n\t\"DC143C\":\"Crimson\",\n\t\"00008B\":\"DarkBlue\",\n\t\"008B8B\":\"DarkCyan\",\n\t\"B8860B\":\"DarkGoldenRod\",\n\t\"A9A9A9\":\"DarkGrey\",\n\t\"006400\":\"DarkGreen\",\n\t\"BDB76B\":\"DarkKhaki\",\n\t\"8B008B\":\"DarkMagenta\",\n\t\"556B2F\":\"DarkOliveGreen\",\n\t\"FF8C00\":\"DarkOrange\",\n\t\"9932CC\":\"DarkOrchid\",\n\t\"8B0000\":\"DarkRed\",\n\t\"E9967A\":\"DarkSalmon\",\n\t\"8FBC8F\":\"DarkSeaGreen\",\n\t\"483D8B\":\"DarkSlateBlue\",\n\t\"2F4F4F\":\"DarkSlateGrey\",\n\t\"00CED1\":\"DarkTurquoise\",\n\t\"9400D3\":\"DarkViolet\",\n\t\"FF1493\":\"DeepPink\",\n\t\"00BFFF\":\"DeepSkyBlue\",\n\t\"696969\":\"DimGrey\",\n\t\"1E90FF\":\"DodgerBlue\",\n\t\"B22222\":\"FireBrick\",\n\t\"FFFAF0\":\"FloralWhite\",\n\t\"228B22\":\"ForestGreen\",\n\t\"FF00FF\":\"Magenta\",\n\t\"DCDCDC\":\"Gainsboro\",\n\t\"F8F8FF\":\"GhostWhite\",\n\t\"FFD700\":\"Gold\",\n\t\"DAA520\":\"GoldenRod\",\n\t\"808080\":\"Grey\",\n\t\"008000\":\"Green\",\n\t\"ADFF2F\":\"GreenYellow\",\n\t\"F0FFF0\":\"HoneyDew\",\n\t\"FF69B4\":\"HotPink\",\n\t\"CD5C5C\":\"IndianRed\",\n\t\"4B0082\":\"Indigo\",\n\t\"FFFFF0\":\"Ivory\",\n\t\"F0E68C\":\"Khaki\",\n\t\"E6E6FA\":\"Lavender\",\n\t\"FFF0F5\":\"LavenderBlush\",\n\t\"7CFC00\":\"LawnGreen\",\n\t\"FFFACD\":\"LemonChiffon\",\n\t\"ADD8E6\":\"LightBlue\",\n\t\"F08080\":\"LightCoral\",\n\t\"E0FFFF\":\"LightCyan\",\n\t\"FAFAD2\":\"LightGoldenRodYellow\",\n\t\"D3D3D3\":\"LightGrey\",\n\t\"90EE90\":\"LightGreen\",\n\t\"FFB6C1\":\"LightPink\",\n\t\"FFA07A\":\"LightSalmon\",\n\t\"20B2AA\":\"LightSeaGreen\",\n\t\"87CEFA\":\"LightSkyBlue\",\n\t\"778899\":\"LightSlateGrey\",\n\t\"B0C4DE\":\"LightSteelBlue\",\n\t\"FFFFE0\":\"LightYellow\",\n\t\"00FF00\":\"Lime\",\n\t\"32CD32\":\"LimeGreen\",\n\t\"FAF0E6\":\"Linen\",\n\t\"800000\":\"Maroon\",\n\t\"66CDAA\":\"MediumAquaMarine\",\n\t\"0000CD\":\"MediumBlue\",\n\t\"BA55D3\":\"MediumOrchid\",\n\t\"9370DB\":\"MediumPurple\",\n\t\"3CB371\":\"MediumSeaGreen\",\n\t\"7B68EE\":\"MediumSlateBlue\",\n\t\"00FA9A\":\"MediumSpringGreen\",\n\t\"48D1CC\":\"MediumTurquoise\",\n\t\"C71585\":\"MediumVioletRed\",\n\t\"191970\":\"MidnightBlue\",\n\t\"F5FFFA\":\"MintCream\",\n\t\"FFE4E1\":\"MistyRose\",\n\t\"FFE4B5\":\"Moccasin\",\n\t\"FFDEAD\":\"NavajoWhite\",\n\t\"000080\":\"Navy\",\n\t\"FDF5E6\":\"OldLace\",\n\t\"808000\":\"Olive\",\n\t\"6B8E23\":\"OliveDrab\",\n\t\"FFA500\":\"Orange\",\n\t\"FF4500\":\"OrangeRed\",\n\t\"DA70D6\":\"Orchid\",\n\t\"EEE8AA\":\"PaleGoldenRod\",\n\t\"98FB98\":\"PaleGreen\",\n\t\"AFEEEE\":\"PaleTurquoise\",\n\t\"DB7093\":\"PaleVioletRed\",\n\t\"FFEFD5\":\"PapayaWhip\",\n\t\"FFDAB9\":\"PeachPuff\",\n\t\"CD853F\":\"Peru\",\n\t\"FFC0CB\":\"Pink\",\n\t\"DDA0DD\":\"Plum\",\n\t\"B0E0E6\":\"PowderBlue\",\n\t\"800080\":\"Purple\",\n\t\"663399\":\"RebeccaPurple\",\n\t\"FF0000\":\"Red\",\n\t\"BC8F8F\":\"RosyBrown\",\n\t\"4169E1\":\"RoyalBlue\",\n\t\"8B4513\":\"SaddleBrown\",\n\t\"FA8072\":\"Salmon\",\n\t\"F4A460\":\"SandyBrown\",\n\t\"2E8B57\":\"SeaGreen\",\n\t\"FFF5EE\":\"SeaShell\",\n\t\"A0522D\":\"Sienna\",\n\t\"C0C0C0\":\"Silver\",\n\t\"87CEEB\":\"SkyBlue\",\n\t\"6A5ACD\":\"SlateBlue\",\n\t\"708090\":\"SlateGrey\",\n\t\"FFFAFA\":\"Snow\",\n\t\"00FF7F\":\"SpringGreen\",\n\t\"4682B4\":\"SteelBlue\",\n\t\"D2B48C\":\"Tan\",\n\t\"008080\":\"Teal\",\n\t\"D8BFD8\":\"Thistle\",\n\t\"FF6347\":\"Tomato\",\n\t\"40E0D0\":\"Turquoise\",\n\t\"EE82EE\":\"Violet\",\n\t\"F5DEB3\":\"Wheat\",\n\t\"FFFFFF\":\"White\",\n\t\"F5F5F5\":\"WhiteSmoke\",\n\t\"FFFF00\":\"Yellow\",\n\t\"9ACD32\":\"YellowGreen\",\n}\n\n\n//# sourceURL=webpack:///./src/js/colors.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst updateValues = function(inputValue, id) {\n\tvar out = convert(inputValue, id);\n\tif (out) {\n\t\tfor (var id in out) {\n\t\t\tlet elt = document.getElementById(id);\n\t\t\tif (elt) {\n\t\t\t\telt.value = out[id];\n\t\t\t}\n\t\t}\n\t\tupdateColor(out.color);\n\t}\n}\n\nmodule.exports = {\n\tupdateValues,\n}\n\n//# sourceURL=webpack:///./src/js/dom.js?");

/***/ }),

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const hexc = __webpack_require__(/*! ./hexc.js */ \"./src/js/hexc.js\");\n\nif (typeof document !== 'undefined') {\n\tdocument.addEventListener(\"DOMContentLoaded\", hexc.init);\n}\n\n//# sourceURL=webpack:///./src/js/entry.js?");

/***/ }),

/***/ "./src/js/hexc.js":
/*!************************!*\
  !*** ./src/js/hexc.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst dom = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n\nconst intval = function(val) {\n\tlet a = parseInt(val);\n\tif (isNaN(a)) {\n\t\ta = 0;\n\t}\n\treturn a;\n}\n\n/**\n * Converts 1 decimal value (0 -> 15) to hexadecimal\n */\nconst decToHex = function(val) {\n\tvar chars = {\n\t\t10 : 'A',\n\t\t11 : 'B',\n\t\t12 : 'C',\n\t\t13 : 'D',\n\t\t14 : 'E',\n\t\t15 : 'F',\n\t};\n\tif (val < 10) {\n\t\treturn val;\n\t}\n\telse {\n\t\treturn chars[val];\n\t}\n}\n\n\n/**\n * Converts hexadecimal string to decimal\n */\nconst convertHexToDec = function(hex) {\n\tvar htd = {\n\t\t'A' : 10,\n\t\t'B' : 11,\n\t\t'C' : 12,\n\t\t'D' : 13,\n\t\t'E' : 14,\n\t\t'F' : 15,\n\t};\n\tfor (var i = 0; i < 10; i++) {\n\t\thtd[''+i] = i;\n\t};\n\n\tvar dec = 0;\n\tvar decValues = [];\n\tfor (var i = hex.length - 1; i >= 0; i--) {\n\t\tdecValues.push(htd[hex[i]]);\n\t};\n\tvar exp = 1;\n\tfor (var i = 0; i < decValues.length; i++) {\n\t\tdec += exp*decValues[i];\n\t\texp *=16;\n\t};\n\treturn dec;\n}\n\n\nconst convertDecToBin = function(dec) {\n\tvar bin = '';\n\twhile (dec > 1) {\n\t\tbin = (dec % 2) + bin;\n\t\tdec = Math.floor(dec / 2);\n\t}\n\tbin = dec+bin;\n\treturn bin;\n}\n\n\nconst convertDecToHex = function(dec) {\n\tvar hex = '';\n\twhile (dec > 15) {\n\t\thex = decToHex(dec % 16)+hex;\n\t\tdec = Math.floor(dec / 16);\n\t}\n\thex = decToHex(dec)+hex;\n\treturn hex;\n}\n\n\nconst convertDecToOct = function(dec) {\n\tvar oct = '';\n\tdecT = dec;\n\twhile (decT > 7) {\n\t\toct = (decT % 8) + oct;\n\t\tdecT = Math.floor(decT / 8);\n\t}\n\toct = decT+oct;\n\treturn oct;\n}\n\n\n/**\n * Converts values according to input\n */\nconst convert = function(input, type) {\n\tvar out = {};\n\n\t// From decimal\n\tif (type == 'decimal') {\n\t\tvar dec = intval(input);\n\t\tout.decimal = dec;\n\t\tout.hexadecimal = convertDecToHex(dec);\n\t\tout.binary = convertDecToBin(dec);\n\t\tout.octal = convertDecToOct(dec);\n\t}\n\n\t// From hexadecimal\n\telse if (type == 'hexadecimal') {\n\t\tvar hex = input.toUpperCase();\n\t\thex = hex.replace(/[^A-F0-9]/g, '');\n\t\tout.hexadecimal = hex;\n\t\tout.decimal = convertHexToDec(hex);\n\t\tout.binary = convertDecToBin(out.decimal);\n\t\tout.octal = convertDecToOct(out.decimal);\n\t}\n\n\t// From binary\n\telse if (type == 'binary') {\n\t\tvar bin = input.replace(/[^01]/g, '');\n\t\tout.binary = bin;\n\n\t\t// To decimal\n\t\tvar dec = 0;\n\t\tvar exp = 1;\n\t\tfor (var i = bin.length - 1; i >= 0; i--) {\n\t\t\tdec += exp*bin[i];\n\t\t\texp *= 2;\n\t\t};\n\t\tout.decimal = dec;\n\n\t\tout.hexadecimal = convertDecToHex(dec);\n\t\tout.octal = convertDecToOct(dec);\n\t}\n\n\t// From octal\n\telse if (type == 'octal') {\n\t\tvar oct = input.replace(/[^0-7]/g, '');\n\t\tout.octal = oct;\n\n\t\t// To decimal\n\t\tvar dec = 0;\n\t\tvar exp = 1;\n\t\tfor (var i = oct.length - 1; i >= 0; i--) {\n\t\t\tdec += exp*oct[i];\n\t\t\texp *= 8;\n\t\t};\n\t\tout.decimal = dec;\n\n\t\tout.binary = convertDecToBin(dec);\n\t\tout.hexadecimal = convertDecToHex(dec);\n\t}\n\telse if (type == 'rgb_r' || type == 'rgb_g' || type == 'rgb_b') {\n\t\tout.rgb_r = Math.min(intval(document.getElementById('rgb_r').value), 255);\n\t\tout.rgb_g = Math.min(intval(document.getElementById('rgb_g').value), 255);\n\t\tout.rgb_b = Math.min(intval(document.getElementById('rgb_b').value), 255);\n\t\tout.hexadecimal = convertDecToHex(out.rgb_r).padStart(2,'0') + convertDecToHex(out.rgb_g).padStart(2,'0') + convertDecToHex(out.rgb_b).padStart(2,'0');\n\t\tout.decimal = convertHexToDec(out.hexadecimal);\n\t\tout.binary = convertDecToBin(out.decimal);\n\t\tout.octal = convertDecToOct(out.decimal);\n\t}\n\telse {\n\t\treturn;\n\t}\n\n\t// Color\n\tif (type == 'rgb_r' || type == 'rgb_g' || type == 'rgb_b') {\n\t\tout.rgb_r = Math.min(intval(document.getElementById('rgb_r').value), 255);\n\t\tout.rgb_g = Math.min(intval(document.getElementById('rgb_g').value), 255);\n\t\tout.rgb_b = Math.min(intval(document.getElementById('rgb_b').value), 255);\n\t\tout.hexadecimal = convertDecToHex(out.rgb_r).padStart(2,'0') + convertDecToHex(out.rgb_g).padStart(2,'0') + convertDecToHex(out.rgb_b).padStart(2,'0');\n\t\tout.color = out.hexadecimal.padStart(6,'0');\n\t}\n\telse {\n\t\tif (out.hexadecimal.length > 6) {\n\t\t\tout.color = '';\n\t\t\tout.rgb_r = '';\n\t\t\tout.rgb_g = '';\n\t\t\tout.rgb_b = '';\n\t\t}\n\t\telse {\n\t\t\tconst hexinput = out.hexadecimal.padStart(6, '0');\n\t\t\tout.color = hexinput;\n\t\t\tout.rgb_r = convertHexToDec(hexinput.slice(0,2));\n\t\t\tout.rgb_g = convertHexToDec(hexinput.slice(2,4));\n\t\t\tout.rgb_b = convertHexToDec(hexinput.slice(4,6));\n\t\t}\n\t}\n\n\treturn out;\n}\n\n\nconst updateFocus = function(event) {\n\tconsole.log(event.target.id);\n\tconsole.log(event.which);\n\tif (event.which != 9 && event.which != 16) {\n\t\tif (event.target.id == 'rgb_r' && document.getElementById('rgb_r').value.length >= 3) {\n\t\t\tdocument.getElementById('rgb_g').focus();\n\t\t}\n\t\tif (event.target.id == 'rgb_g' && document.getElementById('rgb_g').value.length >= 3) {\n\t\t\tdocument.getElementById('rgb_b').focus();\n\t\t}\n\t}\n}\n\n\nconst openNewWindow = function() {\n\ttry {\n\t\tvar hexadecimal = document.getElementById('hexadecimal').value;\n\t\tvar creating = browser.windows.create({\n\t\t\theight : 260,\n\t\t\twidth : 340,\n\t\t\turl : 'index.html#'+hexadecimal,\n\t\t\ttype : 'popup',\n\t\t\t// type : 'panel',\n\t\t});\n\t}\n\tcatch (error) {\n\t\talert(error.message);\n\t}\n}\n\n\nconst updateValues = dom.updateValues;\n\n\n/**\n * Updates the color indicator and the color name\n */\nconst updateColor = function(colorCode) {\n\tconst colorsByCode = __webpack_require__(/*! ./colors.js */ \"./src/js/colors.js\");\n\tlet colorName = '';\n\tif (colorCode.length > 0) {\n\t\tdocument.getElementById('color-indicator').style.backgroundColor = '#'+colorCode;\n\t\tif (colorsByCode[colorCode]) {\n\t\t\tcolorName = colorsByCode[colorCode];\n\t\t}\n\t}\n\telse {\n\t\tdocument.getElementById('color-indicator').style.backgroundColor = null;\n\t}\n\tdocument.getElementById('color_name').textContent = colorName;\n}\n\n\nconst init = function() {\n\tdocument.addEventListener(\"keyup\", function(event) {\n\t\tupdateValues(event.target.value, event.target.id);\n\t\tupdateFocus(event);\n\t});\n\tdocument.getElementById('link_new_window').addEventListener('click', function(event) {\n\t\topenNewWindow();\n\t});\n\n\tsetTimeout(function(){\n\t\tdocument.getElementById('decimal').focus();\n\t}, 100);\n\n\t// Hash\n\tvar url = location.href;\n\tif (url.indexOf('#') > -1) {\n\t\tconst hexadecimal = url.split('#')[1];\n\t\tif (hexadecimal.length > 0) {\n\t\t\tupdateValues(hexadecimal, 'hexadecimal', false);\n\t\t}\n\t\tdocument.getElementsByClassName('actions')[0].remove();\n\t}\n}\n\n\nmodule.exports = {\n\tdecToHex,\n\tconvertDecToBin,\n\tinit,\n}\n\n//# sourceURL=webpack:///./src/js/hexc.js?");

/***/ })

/******/ });