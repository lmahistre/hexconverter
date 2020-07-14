const compiler = require('./compiler');
const chalk = require('chalk');

exports.cssSite = function () {
	return compiler.cssSite().then(function(result) {
		console.log(chalk.green('CSS of site successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.cssAddon = function () {
	return compiler.cssAddon().then(function(result) {
		console.log(chalk.green('CSS of addon successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.jsSite = function () {
	return compiler.jsSite().then(function(result) {
		console.log(chalk.green('JS of site successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.jsAddon = function () {
	return compiler.jsAddon().then(function(result) {
		console.log(chalk.green('JS of addon successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.start = function (args) {
	return compiler.start(args).then(function(port) {
		console.log(chalk.green('Server is listening on port '+port));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.test = function () {
	return compiler.test().then(function(result) {
		console.log(chalk.green(result));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.zip = function() {
	const zip = require('./zip.js');
	return zip.addon().then(function(result) {
		console.log(chalk.green(result));
		return zip.source();
	}).then(function(result) {
		console.log(chalk.green(result));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.imagesSite = function() {
	return compiler.imagesSite().then(function(result) {
		console.log(chalk.green('Images have been generated'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.imagesAddon = function() {
	return compiler.imagesAddon().then(function(result) {
		console.log(chalk.green('Images have been generated'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.manifestAddon = function() {
	return compiler.manifestAddon().then(function(result) {
		console.log(chalk.green(result));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.manifestSite = function() {
	return compiler.manifestSite().then(function(result) {
		console.log(chalk.green(result));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.htmlAddon = function() {
	return compiler.htmlAddon().then(function(result) {
		console.log(chalk.green(result));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.htmlSite = function() {
	return compiler.htmlSite().then(function(result) {
		console.log(chalk.green(result));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}
