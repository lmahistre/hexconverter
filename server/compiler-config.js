const path = require('path');
const appDirName = path.resolve(__dirname+'/..');

module.exports = {
	js : {
		mode: 'production', // production
		entry : appDirName+"/src/js/entry.js",
		output : {
			path : appDirName +'/build',
			filename : 'hexc.js',
		},
		optimization : {
			minimize : false,
		},
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
			'compute.spec.js',
			'converter.spec.js',
			'tools.spec.js',
			'validate.spec.js',
		],
		helpers: [],
	},
};