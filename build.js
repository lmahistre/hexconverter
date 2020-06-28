#!/usr/bin/env node
const args = process.argv.slice(2);
const action = require('./server/cli');

const booleanOptions = ['--version', '--mute-notification', '-n'];
const stringOptions = [
	'--port', '-p',
];
let position = 0;
const options = {};
let actionName = null;
const errors = [];

while (position < args.length) {
	if (booleanOptions.indexOf(args[position]) > -1) {
		options[args[position]] = true;
	}
	else if (stringOptions.indexOf(args[position]) > -1) {
		const key = args[position];
		if (position + 2 < args.length && args[position + 1]) {
			options[key] = args[position + 1];
			position++;
		}
		else {
			errors.push('Option ' + key + ' has no value');
		}
	}
	else {
		if (position === args.length - 1) {
			actionName = args[position];
		}
		else {
			errors.push('Unknown option "' + args[position] + '"');
		}
	}
	position++;
}

if (options['--version']) {
	action.version();
}

if (errors.length) {
	for (let i=0; i<errors.length; i++) {
		if (typeof action.error === 'function') {
			action.error(errors[i]);
		}
	}
}

if (actionName) {
	if (typeof action[actionName] === 'function') {
		action[actionName](options);
	}
	else {
		action.error('Unknown action "' + args[position] + '"');
	}
}
else if (typeof action.default === 'function') {
	action.default();
}
