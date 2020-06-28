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

exports.start = function (args) {
	return new Promise(function(resolve, reject) {
		try {
			const port = args['--port'] || args['-p'] || config.app.port || 3007;
			const express = require('express');
			const app = express();

			app.get('/', function (req, res) {
				res.sendFile(baseDir+'/public/index.html');
			});

			// Static files
			app.use('/', express.static(baseDir+'/public'));

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

exports.images = function() {
	const sharp = require('sharp');

	return new Promise(function(resolve, reject) {
		if (!fs.existsSync('./public/img')) {
			fs.mkdirSync('./public/img');
		}
		if (!fs.existsSync('./addon/img')) {
			fs.mkdirSync('./addon/img');
		}

		fs.copyFileSync(baseDir+'/src/img/new_window.png', baseDir+'/addon/img/new_window.png');
		fs.copyFileSync(baseDir+'/src/img/new_window.png', baseDir+'/public/img/new_window.png');

		const formats = config.app.iconFormats;

		Promise.all(formats.map(function(format) {
			return sharp(baseDir+'/src/img/logo-512.png')
			.resize(format)
			.toFile(baseDir+'/addon/img/logo-'+format+'.png')
			.catch(function(error) {
				reject(error);
			});
		})).then(function() {
			for (let i=0; i<formats.length; i++) {
				fs.copyFileSync(baseDir+'/addon/img/logo-'+formats[i]+'.png', baseDir+'/public/img/logo-'+formats[i]+'.png');
			}

			resolve('Images generated successfully');
		});
	});
}

exports.htmlSite = function() {
	return new Promise(function(resolve, reject) {
		const html = require(baseDir+'/src/static/html-site')(config.app);
		fs.writeFileSync(baseDir+'/public/index.html', html);
		resolve('HTML generated for site');
	});
}

exports.htmlAddon = function() {
	return new Promise(function(resolve, reject) {
		const html = require(baseDir+'/src/static/html-addon')(config.app);
		fs.writeFileSync(baseDir+'/addon/index.html', html);
		resolve('HTML generated for addon');
	});
}

exports.manifestAddon = function() {
	return new Promise(function (resolve, reject) {
		const manifest = require(baseDir+'/src/static/manifest-addon');
		fs.writeFileSync(baseDir+'/addon/manifest.json', JSON.stringify(manifest, null, '\t'));
		resolve('Manifest generated for addon');
	});
}

exports.manifestSite = function() {
	return new Promise(function(resolve, reject) {
		const manifest = require(baseDir+'/src/static/manifest-site.json');
		const packageJson = require(baseDir+'/package.json');
		manifest.short_name = config.app.name;
		manifest.name = config.app.name;
		manifest.icons = [];
		for (let i=0; i<config.app.iconFormats.length; i++) {
			manifest.icons.push({
				src : 'img/logo-'+config.app.iconFormats[i]+'.png',
				type : 'image/png',
				sizes : config.app.iconFormats[i]+'x'+config.app.iconFormats[i],
			});
		}
		manifest.background_color = config.app.themeColor;
		manifest.theme_color = config.app.themeColor;

		fs.writeFileSync(baseDir+'/public/manifest.json', JSON.stringify(manifest, null, '\t'));
		resolve('Manifest generated for site');
	});
}
