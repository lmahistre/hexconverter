export function decimal(inp) {
	return (''+inp).replace(/[^0-9]/g, '');
}


export function octal(inp) {
	return (''+inp).replace(/[^0-7]/g, '');
}


export function hexadecimal(inp) {
	return inp.toUpperCase().replace(/[^A-F0-9]/g, '');
}


export function binary(input) {
	return input.replace(/[^01]/g, '');
}


export function base256(inp) {
	let base256 = inp.replace(/[^0-9,]/g, '');
	let ab256 = base256.split(',');
	for (let i=0; i<ab256.length; i++) {
		ab256[i] = decimal(ab256[i]);
		if (parseInt(ab256[i]) > 255) {
			ab256[i] = ab256[i].substr(0, ab256[i].length - 1);
		}
	}
	return ab256.join(',');
}
