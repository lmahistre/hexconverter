import React from 'react';

import compute from '../services/compute';

import Vue from './vue';

export default function Main({
	hexadecimal,
}) {
	const [state, setState] = React.useState(hexadecimal ? compute(hexadecimal, 'hexadecimal') : {});
	const showNewWindow = location.href.indexOf('#') === -1 && 'undefined' !== typeof browser;

	const handleChange = function({target}) {
		const origin = target.attributes.name.value;
		const inputValue = target.value;
		const newState = compute(inputValue, origin);
		localStorage.hch = newState.hexadecimal;
		setState(newState);
	}

	const openNewWindow = function() {
		try {
			browser.windows.create({
				height : 336,
				width : 400,
				url : 'index.html#',
				type : 'popup',
			});
		}
		catch (error) {
			console.error(error.message);
		}
	}

	const clearValues = function() {
		localStorage.hch = null;
		setState(compute('', 'hexadecimal'));
	}

	return  (
		<Vue
			handleChange={handleChange}
			decimal={state.decimal}
			hexadecimal={state.hexadecimal}
			binary={state.binary}
			octal={state.octal}
			base256={state.base256}
			colorName={state.colorName}
			color={state.color}
			ascii={state.ascii}
			clearValues={clearValues}
			openNewWindow={openNewWindow}
			showNewWindow={showNewWindow}
		/>
	);
}
