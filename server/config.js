const path = require('path');
const appDirName = path.resolve(__dirname+'/..');

module.exports = {
	js : {
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
		entry : {
			hexc :[
				appDirName+"/src/js/entry.js",
			],
		},
		output : {
			path : appDirName +'/public',
			filename : '[name].js',
		},
		optimization : {
			minimize : false,
		},
		node : false,
	},
	test : {
		spec_dir: 'src/tests',
		spec_files: [
			'tools.spec.js',
			'validate.spec.js',
			'converter.spec.js',
			'compute.spec.js',
		],
		helpers: [],
	},
	app : {
		port : 3007,
	},
	css : {
		inputFolder : appDirName+'/src/less',
		inputFilename : 'index.less',
		outputFolder : appDirName+'/public',
		outputFilename : 'hexc.css',
	},
};