const fs = require('fs');
const archiver = require('archiver');
const package = require('../package.json');

exports.addon = function() {
	return new Promise(function(resolve, reject) {
		const output = fs.createWriteStream(__dirname + '/../'+package.name+'-'+package.version+'.zip');
		const archive = archiver('zip', {
			zlib: { 
				level: 9 
			},
		});
		let msg = '';

		output.on('close', function() {
			msg = 'Size of addon zip: ' + Math.ceil(archive.pointer()/1000) + ' kB';
			resolve(msg);
		});

		archive.pipe(output);
		archive.directory('addon', false);
		archive.finalize();
	});
}

exports.source = function(callback) {
	const config = require('./config');

	return new Promise(function(resolve, reject) {
		const output = fs.createWriteStream(__dirname + '/../'+package.name+'-'+package.version+'.src.zip');
		const archive = archiver('zip', {
			zlib: { 
				level: 9,
			},
		});
		let msg = '';

		output.on('close', function() {
			msg = 'Size of source zip: ' + Math.ceil(archive.pointer()/1000) + ' kB';
			resolve(msg);
		});

		archive.pipe(output);

		for (let i=0; i<config.zipSource.directories.length; i++) {
			archive.directory(config.zipSource.directories[i], config.zipSource.directories[i]);
		}

		for (let i=0; i<config.zipSource.files.length; i++) {
			const file1 = __dirname + '/../'+config.zipSource.files[i];
			archive.append(fs.createReadStream(file1), { 
				name: config.zipSource.files[i], 
			});	
		}

		archive.finalize();
	});
}
