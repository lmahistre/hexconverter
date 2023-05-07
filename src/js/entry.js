import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/main';

window.onload = function() {
	document.title = 'Hexconverter';

	const props = {};
	if (localStorage && localStorage.hch) {
		props.hexadecimal = localStorage.hch;
	}

	const container = document.getElementById('application-root');
	const root = createRoot(container);
	root.render(React.createElement(Main, props));
}
