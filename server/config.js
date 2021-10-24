const path = require('path');
const appDirName = path.resolve(__dirname+'/..');

module.exports = {
	jsAddon : {
		mode: 'production',
		module: {
			rules: [
				{
					test: /\.jsx$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
					},
				},
			],
		},
		entry : appDirName+"/src/js/entry.js",
		output : {
			path : appDirName +'/addon',
			filename : 'app.js',
		},
		node : false,
		optimization : {
			minimize : false,
		},
		resolve : {
			extensions : ['.js', '.jsx',],
		},
	},
	app : {
		port : 3007,
		name : 'Hexconverter',
		iconFormats : [32, 48, 64, 96, 128, 512],
		themeColor : '#EEE',
	},
	cssAddon : {
		inputFolder : appDirName+'/src/less',
		inputFilename : 'index.less',
		outputFolder : appDirName+'/addon',
		outputFilename : 'style.css',
	},
	zipSource : {
		directories : [
			'server',
			'src',
		],
		files : [
			'.gitignore',
			'ci.yml',
			'build.js',
			'CHANGELOG.md',
			'package.json',
			'package-lock.json',
			'README.fr.md',
			'README.md',
		],
	},
};