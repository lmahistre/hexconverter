const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const appDirName = path.resolve(__dirname+'/..');

module.exports = {
	js : {
		mode: 'production',
		entry : {
			hexc :[
				appDirName+"/src/js/entry.js",
			],
		},
		output : {
			path : appDirName +'/build',
			filename : '[name].js',
		},
		optimization : {
			minimize : false,
		},
		plugins: [
			new CleanWebpackPlugin([
				appDirName+'/build/hexc.js',
				appDirName+'/build/hexc.css',
			], {
				allowExternal : true,
			}),
		],
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
		outputFolder : appDirName+'/build',
		outputFilename : 'hexc.css',
	},
};