const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const config = require('./config.js');

const baseDir = path.resolve(__dirname+'/..');

const css = function(conf) {
	const less = require('less');
	return new Promise(function(resolve, reject) {
		try {
			fs.readFile(conf.inputFolder+'/'+conf.inputFilename, {
				encoding: 'utf8',
			},
			function(err, data) {
				if (err) {
					reject(err);
				}
				less.render(data, {
					paths: [conf.inputFolder+'/'],
					filename: './'+conf.inputFilename,
					compress: false,
				}, function (e, output) {
					if (e) {
						reject(e);
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

exports.start = function (args) {
	return new Promise(function(resolve, reject) {
		try {
			const port = args['--port'] || args['-p'] || config.app.port || 3007;
			const express = require('express');
			const app = express();

			app.get('/', function (req, res) {
				res.sendFile(baseDir+'/addon/index.html');
			});

			// Static files
			app.use('/', express.static(baseDir+'/addon'));

			app.listen(port);
			resolve(port);
		}
		catch (error) {
			reject(error);
		}
	});
}

exports.imagesAddon = function() {
	const sharp = require('sharp');

	return new Promise(function(resolve) {
		if (!fs.existsSync('./addon/img')) {
			fs.mkdirSync('./addon/img');
		}

		fs.copyFileSync(baseDir+'/src/img/new_window.png', baseDir+'/addon/img/new_window.png');

		const formats = config.app.iconFormats;

		Promise.all(formats.map(function(format) {
			return sharp(baseDir+'/src/img/logo-512.png')
			.resize(format)
			.toFile(baseDir+'/addon/img/logo-'+format+'.png');
		})).then(function() {
			resolve('Images for addon generated successfully');
		});
	});
}

exports.htmlAddon = function() {
	return new Promise(function(resolve) {
		const html = require(baseDir+'/src/static/html')(config.app);
		fs.writeFileSync(baseDir+'/addon/index.html', html);
		resolve('HTML generated for addon');
	});
}

exports.manifestAddon = function() {
	return new Promise(function (resolve) {
		const manifest = require(baseDir+'/src/static/manifest');
		fs.writeFileSync(baseDir+'/addon/manifest.json', JSON.stringify(manifest, null, '\t'));
		resolve('Manifest generated for addon');
	});
}
