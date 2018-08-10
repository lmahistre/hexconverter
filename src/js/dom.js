
const colorsByCode = require('./colors.js');

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
	return typeof browser !== 'undefined' ? true : false;
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
