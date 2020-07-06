const tasks = require('./tasks.js');
const config = require('./config.js');
const chalk = require('chalk');

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
	tasks.jsSite()
		.then(tasks.cssSite)
		.then(tasks.manifestSite)
		.then(tasks.htmlSite)
		.then(tasks.images);
}

/**
 * Builds the app for addon and site
 */
exports.build = function(args) {
	tasks.jsSite()
		.then(tasks.cssSite)
		.then(tasks.jsAddon)
		.then(tasks.cssAddon)
		.then(tasks.manifestAddon)
		.then(tasks.manifestSite)
		.then(tasks.htmlAddon)
		.then(tasks.htmlSite)
		.then(tasks.images);
}

exports.start = function(args) {
	tasks.start(args);
}

/**
 * Generates 2 zip files for the addon
 */
exports.publish = function(args) {
	tasks.jsAddon()
		.then(tasks.cssAddon)
		.then(tasks.manifestAddon)
		.then(tasks.htmlAddon)
		.then(tasks.images)
		.then(tasks.zip);
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

exports.images = function(args) {
	tasks.images();
}

exports.version = function() {
	const package = require('../package.json');
	console.log(chalk.green('Version ' + package.version));
}
