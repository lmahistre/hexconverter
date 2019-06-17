const tasks = require('./tasks.js');
const config = require('./config.js');

exports.css = function (args) {
	tasks.cssSite();
}


exports.js = function (args) {
	tasks.jsSite();
}


exports.test = function(args) {
	tasks.test();
}


exports.dev = function(args) {
	tasks.jsSite().then(tasks.css);
}


exports.build = function(args) {
	tasks.jsSite().then(tasks.cssSite).then(tasks.jsAddon).then(tasks.cssAddon)
		.then(tasks.test);
}

exports.start = function(args) {
	tasks.start();
}


exports.publish = function(args) {
	const zip = require('./zip.js');
	tasks.jsAddon().then(tasks.cssAddon).then(zip.addon).then(zip.source);
}


exports.watch = function(args) {
	const watch = require('node-watch');
	console.log('Watching src');
	watch('./src', { 
		recursive: true 
	}, function(evt, name) {
		console.log('%s changed.', name);
		tasks.jsSite().then(tasks.cssSite);
	});
}
