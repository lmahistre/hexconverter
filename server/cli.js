const tasks = require('./tasks.js');
const config = require('./compiler-config.js');
const chalk = require('chalk');

exports.css = function (args) {
	tasks.css();
}


exports.js = function (args) {
	tasks.js();
}


exports.test = function(args) {
	tasks.test().then(function(result) {
		console.log(chalk.green(result));
	}).catch(function (error) {
		console.log(chalk.red(result));
	});
}


exports.dev = function(args) {
	tasks.js().then(tasks.css);
}


exports.build = function(args) {
	tasks.js().then(tasks.css).then(tasks.test);
}


exports.start = function(args) {
	tasks.start().then(function(port) {
		console.log(chalk.green('Server is listening on port '+port));
	});
}


exports.publish = function(args) {
	const zip = require('./zip.js');
	zip.addon().then(zip.source);
}


exports.watch = function(args) {
	const watch = require('node-watch');
	console.log('Watching src');
	watch('./src', { 
		recursive: true 
	}, function(evt, name) {
		console.log('%s changed.', name);
		tasks.js().then(tasks.css).then(tasks.test);
	});
}
