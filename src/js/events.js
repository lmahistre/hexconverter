const dom = require('./dom.js');
const compute = require('./compute.js');

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
