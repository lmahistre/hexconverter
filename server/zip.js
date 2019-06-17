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
		output.on('close', function() {
			console.log('Size of addon zip: ' + Math.ceil(archive.pointer()/1000) + ' kB');
		});
		archive.pipe(output);
		archive.directory('addon', false);
		archive.finalize();
		resolve();
	});
}


exports.source = function(callback) {
	return new Promise(function(resolve, reject) {
		const output = fs.createWriteStream(__dirname + '/../'+package.name+'-'+package.version+'.src.zip');
		const archive = archiver('zip', {
			zlib: { 
				level: 9,
			},
		});
		output.on('close', function() {
			console.log('Size of source zip: ' + Math.ceil(archive.pointer()/1000) + ' kB');
		});

		archive.pipe(output);
		archive.directory('public', 'public');
		archive.directory('addon', 'addon');
		archive.directory('server', 'server');
		archive.directory('src', 'src');

		const files = [
			'.gitignore',
			'.travis.yml',
			'build.js',
			'CHANGELOG.md',
			'package.json',
			'package-lock.json',
			'README.fr.md',
			'README.md',
		];
		for (let i=0; i<files.length; i++) {
			const file1 = __dirname + '/../'+files[i];
			archive.append(fs.createReadStream(file1), { 
				name: files[i], 
			});	
		}

		archive.finalize();
		resolve();
	});
}