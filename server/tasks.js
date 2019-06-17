const compiler = require('./compiler');
const chalk = require('chalk');

exports.cssSite = function () {
	return compiler.cssSite().then(function(result) {
		console.log(chalk.green('CSS successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.cssAddon = function () {
	return compiler.cssAddon().then(function(result) {
		console.log(chalk.green('CSS successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.jsSite = function () {
	return compiler.jsSite().then(function(result) {
		console.log(chalk.green('JS successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.jsAddon = function () {
	return compiler.jsAddon().then(function(result) {
		console.log(chalk.green('JS successfully compiled'));
	}).catch(function (error) {
		console.log(chalk.red(error));
	});
}

exports.start = function () {
	return compiler.start().then(function(port) {
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
