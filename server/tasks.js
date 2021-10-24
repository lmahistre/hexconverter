const compiler = require('./compiler');
const chalk = require('chalk');

exports.cssAddon = function () {
	return compiler.cssAddon().then(function() {
		process.stdout.write(chalk.green('CSS successfully compiled\n'));
	}).catch(function (error) {
		console.error(chalk.red(error));
	});
}

exports.jsAddon = function () {
	return compiler.jsAddon().then(function() {
		process.stdout.write(chalk.green('JS successfully compiled\n'));
	}).catch(function (error) {
		console.error(chalk.red(error));
	});
}

exports.start = function (args) {
	return compiler.start(args).then(function(port) {
		process.stdout.write(chalk.green('Server is listening on port '+port + '\n'));
	}).catch(function (error) {
		console.error(chalk.red(error));
	});
}

exports.zip = function() {
	const zip = require('./zip.js');
	return zip.addon().then(function(result) {
		process.stdout.write(chalk.green(result) + '\n');
		return zip.source();
	}).then(function(result) {
		process.stdout.write(chalk.green(result) + '\n');
	}).catch(function (error) {
		console.error(chalk.red(error));
	});
}

exports.imagesAddon = function() {
	return compiler.imagesAddon().then(function() {
		process.stdout.write(chalk.green('Images have been generated\n'));
	}).catch(function (error) {
		console.error(chalk.red(error));
	});
}

exports.manifestAddon = function() {
	return compiler.manifestAddon().then(function(result) {
		process.stdout.write(chalk.green(result) + '\n');
	}).catch(function (error) {
		console.error(chalk.red(error));
	});
}

exports.htmlAddon = function() {
	return compiler.htmlAddon().then(function(result) {
		process.stdout.write(chalk.green(result) + '\n');
	}).catch(function (error) {
		console.error(chalk.red(error));
	});
}
