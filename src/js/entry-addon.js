const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./components/main.jsx');

window.onload = function() {
	document.title = 'Hexconverter';

	// Get hexadecimal value in URL (used in popup window)
	const props = {};
	const url = location.href;
	if (url.indexOf('#') > -1) {
		const hexadecimal = url.split('#')[1];
		if (hexadecimal.length > 0) {
			props.hexadecimal = hexadecimal;
		}
	}

	ReactDOM.render(
		React.createElement(Main, props),
		document.getElementById('application-root')
	);
}
