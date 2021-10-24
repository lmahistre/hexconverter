import React from 'react';

import compute from '../services/compute';

import Vue from './vue';

export default function Main({
	hexadecimal,
}) {
	const [state, setState] = React.useState(hexadecimal ? compute(hexadecimal, 'hexadecimal') : null);
	const showNewWindow = location.href.indexOf('#') === -1 && 'undefined' !== typeof browser;

	const handleChange = function({target}) {
		const origin = target.attributes.name.value;
		const inputValue = target.value;
		setState(compute(inputValue, origin));
	}

	const openNewWindow = function() {
		try {
			browser.windows.create({
				height : 270,
				width : 360,
				url : 'index.html#'+state.hexadecimal,
				type : 'popup',
			});
		}
		catch (error) {
			window.alert(error.message);
		}
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
			openNewWindow={openNewWindow}
			showNewWindow={showNewWindow}
		/>
	);
}
