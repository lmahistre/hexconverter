const dom = require('./dom.js');
const events = require('./events.js');

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


window.onload = function() {
	document.title = 'Hexconverter';
	ReactDOM.render(
		React.createElement(Main, null),
		document.getElementById('application-container')
	);
}