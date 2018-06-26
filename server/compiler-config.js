const path = require('path');
const appDirName = path.resolve(__dirname+'/..');

const resolve = relativePath => path.resolve(__dirname, '..', relativePath)

module.exports = {
	js : {
		mode: 'development',
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
		spec_dir: 'src/test',
		spec_files: [
			'test.js',
		],
		helpers: [],
	},
};