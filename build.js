#!/usr/bin/env node
const args = process.argv.slice(2);

const action = require('./server/cli.js');

if (args.length) {
	if (action[args[0]]) {
		action[args[0]](args.slice(1));
	}
	else {
		console.log('Invalid argument '+args[0]);
	}
}
else if (typeof action.default === 'function') {
	action.default();
}

