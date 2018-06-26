const webpack = require('webpack');
const fs = require('fs');
const less = require('less');


/**
 * Bundles JS and JSX into one single file
 */
exports.js = function(configJs, callback) {
	const webpackCompiler = webpack(configJs);
	try {
		webpackCompiler.run(function(err, stats) {
			try {
				if (err) {
					if (callback && typeof callback === 'function') {
						callback(err);
					}
				}
				else if (stats.compilation.errors && stats.compilation.errors.length) {
					if (callback && typeof callback === 'function') {
						callback(stats.compilation.errors);
					}
				}
				else {
					if (callback && typeof callback === 'function') {
						callback(null, true);
					}
				}
			}
			catch (error) {

				if (callback && typeof callback === 'function') {
					callback(error);
				}
			}
		});
	}
	catch (error) {
		if (callback && typeof callback === 'function') {
			callback(error);
		}
	}
};


/**
 * Compiles LESS files into CSS
 */
exports.css =  function(configCss, callback) {

	try {
		fs.readFile(configCss.inputFolder+'/'+configCss.inputFilename, { 
			encoding: 'utf8' 
		}, 
		function(err, data) {
			if (err) {
				if (callback && typeof callback === 'function') {
					callback(err);
				}
			}
			less.render(data, {
				paths: [configCss.inputFolder+'/'], // Specify search paths for @import directives
				filename: './'+configCss.inputFilename,
				compress: false // Minify CSS output
			},
			function (e, output) {
				if (e) {
					if (callback && typeof callback === 'function') {
						callback(e);
					}
				}
				else {
					fs.writeFile(configCss.outputFolder+'/'+configCss.outputFilename, output.css, {
						flag:'w+', 
						encoding:'utf8'
					},
					function(err) {
						if (err) {
							if (callback && typeof callback === 'function') {
								callback(err);
							}
						}
						else {
							if (callback && typeof callback === 'function') {
								callback(null, true);
							}
						}
					});
				}
			});
		});
	}
	catch(err) {
		if (callback && typeof callback === 'function') {
			callback(err);
		}
	}
};


exports.test = function(config, callback) {
	const jest = require('jest');
	jest.runCLI(config, [config.rootDir]).then(function(success) {
		if (callback && typeof callback === 'function') {
			callback(success);
		}
	});
}