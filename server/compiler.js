const webpack = require('webpack');
const fs = require('fs');
const config = require('./config.js');


const css = function(conf) {
	const less = require('less');
	return new Promise(function(resolve, reject) {
		try {
			fs.readFile(conf.inputFolder+'/'+conf.inputFilename, { 
				encoding: 'utf8' 
			}, 
			function(err, data) {
				if (err) {
					reject(err);
				}
				less.render(data, {
					paths: [conf.inputFolder+'/'],
					filename: './'+conf.inputFilename,
					compress: false,
				},
				function (e, output) {
					if (e) {
						resolve();
					}
					else {
						fs.writeFile(conf.outputFolder+'/'+conf.outputFilename, output.css, {
							flag:'w+', 
							encoding:'utf8'
						},
						function(err) {
							if (err) {
								reject(err);
							}
							else {
								resolve();
							}
						});
					}
				});
			});
		}
		catch(err) {
			reject(err);
		}
	});
}

exports.cssAddon = function() {
	return css(config.cssAddon);
}

exports.cssSite = function() {
	return css(config.cssSite);
}

const js = function(conf) {
	return new Promise(function(resolve, reject) {
		const webpackCompiler = webpack(conf);
		try {
			webpackCompiler.run(function(err, stats) {
				try {
					if (err) {
						reject(err);
					}
					else if (stats.compilation.errors && stats.compilation.errors.length) {
						reject(stats.compilation.errors);
					}
					else {
						resolve();
					}
				}
				catch (error) {
					reject(error);
				}
			});
		}
		catch (error) {
			reject(error);
		}
	});
}

exports.jsAddon = function() {
	return js(config.jsAddon);
}

exports.jsSite = function() {
	return js(config.jsSite);
}

exports.start = function () {
	return new Promise(function(resolve, reject) {
		try {
			const express = require('express');
			const app = express();
			const path = require('path');

			const port = config.app.port || 3007;

			app.get('/', function (req, res) {
				res.sendFile(path.resolve(__dirname+'/../public/index.html'));
			});

			// Static files
			app.use('/', express.static(path.resolve(__dirname+'/../public')));

			app.listen(port);
			resolve(port);
		}
		catch (error) {
			reject(error);
		}
	});
}


exports.test = function(args) {
	return new Promise(function (resolve, reject) {
		const Jasmine = require('jasmine');
		const jasmine = new Jasmine();
		jasmine.loadConfig(config.test);
		jasmine.onComplete(function(passed) {
			if(passed) {
				resolve('All tests pass');
			}
			else {
				reject('At least one test failed');
			}
		});
		jasmine.execute();
	});
}