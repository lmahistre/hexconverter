const tasks = require('./tasks.js');

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
