const tasks = require('./tasks.js');
const config = require('./config.js');

exports.css = function (args) {
	tasks.css();
}


exports.js = function (args) {
	tasks.js();
}


exports.test = function(args) {
	tasks.test();
}


exports.dev = function(args) {
	tasks.js().then(tasks.css);
}


exports.build = function(args) {
	tasks.js().then(tasks.css).then(tasks.test);
}


exports.start = function(args) {
	tasks.start();
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
		tasks.js().then(tasks.css);
	});
}
