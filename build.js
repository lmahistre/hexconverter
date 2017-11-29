#!/usr/bin/env nodejs
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
// const less = require('less');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const configJs = {
	entry: __dirname+"/hexc.js",
	output: {
		path: __dirname,
		filename: "app.js"
	},
	plugins : [
		new UglifyJsPlugin(),
	],
	// module: {
	// 	loaders: [
	// 		{
	// 			// test: /\.jsx$/,
	// 			// loader: 'jsx-loader?insertPragma=React.DOM&harmony',
	// 			loader : 'uglify',
	// 		},
	// 	],
	// },
};

const compiler = webpack(configJs);

const compileJs = function(callback) {
	console.log('Compiling '+configJs.output.filename);
	try {
		compiler.run(function(err, stats) {
			try {
				if (err) {
					console.log('Compilation failed : '+configJs.output.filename);
					console.log(err);
				}
				else {
					console.log('Successfully compiled '+configJs.output.filename);
				}
				if (callback && typeof callback === 'function') {
					callback();
				}
			}
			catch (error) {
				console.log(error);
			}
		});
	}
	catch (error) {
		console.log(error);
	}
};


const compileCss =  function(inputFile, outputFile, callback) {
	console.log('Compiling '+outputFile);

	try {
		fs.readFile(__dirname+'/src/less/'+inputFile, { 
			encoding: 'utf8' 
		}, 
		function(err, data) {
			if (err) {
				console.log(err.stack);
			}
			less.render(data, {
				paths: [__dirname+'/src/less/'], // Specify search paths for @import directives
				filename: './'+inputFile, // Specify a filename, for better error messages
				compress: false // Minify CSS output
			},
			function (e, output) {
				if (e) {
					console.log(e.stack);
				}
				fs.writeFile(__dirname+'/public_html/client/'+outputFile, output.css, {
					flag:'w+', 
					encoding:'utf8'
				},
				function(err) {
					if (err != null) {
						console.log(err.stack);
					}
					else {
						console.log('Successfully compiled '+outputFile);
						if (callback) {
							callback();
						}
					}
				});
			});
		});
	}
	catch(err) {
		console.log('Compilation failed : '+outputFile);
		console.log(err.stack);
	}
};


const compileMainCss = function(callback) {
	compileCss('index.less', 'style.css', callback);
};

compileJs();

// const args = process.argv.slice(2);

// const actions = ['js', 'css'];

// if (args.length) {
// 	if (args[0] === 'js') {
// 		compileJs();
// 	}
// 	else if (args[0] === 'css') {
// 		compileMainCss();
// 	}
// 	else {
// 		console.log('Invalid argument '+args[0]);
// 	}
// }
// else {
// 	compileJs(compileMainCss);
// }
