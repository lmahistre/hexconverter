const React = require('react');
const ReactDOM = require('react-dom');
const Main = require('./components/main.jsx');

const addServiceWorker = function () {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
		.register('sw.js')
		.then(function(registration) {
			console.log('Service Worker registration complete.');
		})
		.catch(function(error) {
			console.log('Service Worker registration failure.', error);
		});
	}
}

window.onload = function() {
	document.title = 'Hexconverter';

	ReactDOM.render(
		React.createElement(Main),
		document.getElementById('application-root')
	);

	addServiceWorker();
}
