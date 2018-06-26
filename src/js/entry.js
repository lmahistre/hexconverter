const hexc = require('./hexc.js');

if (typeof document !== 'undefined') {
	document.addEventListener("DOMContentLoaded", hexc.init);
}