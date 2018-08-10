const path = require('path');
const appDirName = path.resolve(__dirname+'/..');

module.exports = {
	js : {
		mode: 'development', // production
		entry : appDirName+"/src/js/entry.js",
		output : {
			path : appDirName +'/build',
			filename : 'hexc.js',
		}
	},
	css : {
		inputFolder : appDirName+'/src/less',
		inputFilename : 'index.less',
		outputFolder : appDirName+'/build',
		outputFilename : 'hexc.css',
	},
	test : {
		spec_dir: 'tests',
		spec_files: [
			'converter.spec.js',
			'compute.spec.js',
			'validate.spec.js',
		],
		helpers: [],
	},
};