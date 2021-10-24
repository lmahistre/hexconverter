const tasks = require('./tasks.js');

exports.css = function () {
	tasks.cssSite();
}

exports.js = function () {
	tasks.jsAddon();
}

/**
 * Builds the app for addon and site
 */
exports.build = function() {
	tasks.jsAddon()
	.then(tasks.cssAddon)
	.then(tasks.manifestAddon)
	.then(tasks.htmlAddon)
	.then(tasks.imagesAddon);
}

exports.start = function(args) {
	tasks.start(args);
}

/**
 * Generates 2 zip files for the addon
 */
exports.publish = function() {
	tasks.jsAddon()
	.then(tasks.cssAddon)
	.then(tasks.manifestAddon)
	.then(tasks.htmlAddon)
	.then(tasks.imagesAddon)
	.then(tasks.zip);
}

exports.watch = function() {
	const watch = require('node-watch');
	process.stdout.write('\nWatching src');
	watch('./src', {
		recursive: true,
	}, function(evt, name) {
		process.stdout.write('\n%s changed.', name);
		tasks.jsAddon().then(tasks.cssAddon);
	});
}

exports.images = function() {
	tasks.images();
}

exports.version = function() {
	const packageJson = require('../package.json');
	process.stdout.write('\nVersion ' + packageJson.version);
}
