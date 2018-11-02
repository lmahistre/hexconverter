const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const appDirName = path.resolve(__dirname+'/..');

module.exports = {
	webpack : {
		mode: 'production',
		entry : {
			hexc :[
				appDirName+"/src/js/entry.js",
				appDirName+"/src/less/index.less",
			],
		},
		output : {
			path : appDirName +'/build',
			filename : '[name].js',
		},
		optimization : {
			minimize : false,
		},
		module : {
			rules : [
				{
					test : /\.less$/,
					use : [
						{ 
							loader : MiniCssExtractPlugin.loader 
						},
						{
							loader : 'css-loader',
						},
						{
							loader : 'less-loader',
						},
					],
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: "hexc.css",
			}),
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
};