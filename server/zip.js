
const fs = require('fs');
const archiver = require('archiver');
const package = require('../package.json');

exports.addon = function(callback) {
	const output = fs.createWriteStream(__dirname + '/../'+package.name+'-'+package.version+'.zip');
	const archive = archiver('zip', {
		zlib: { 
			level: 9 
		},
	});
	output.on('close', function() {
		console.log(Math.ceil(archive.pointer()/1000) + ' kB');
	});
	archive.pipe(output);
	archive.directory('build', false);
	archive.finalize();

	if ('function' === typeof callback) {
		callback();
	}
}


exports.source = function(callback) {
	const output = fs.createWriteStream(__dirname + '/../'+package.name+'-'+package.version+'.src.zip');
	const archive = archiver('zip', {
		zlib: { 
			level: 9 
		},
	});
	output.on('close', function() {
		console.log(Math.ceil(archive.pointer()/1000) + ' kB');
	});

	archive.pipe(output);
	archive.directory('build', 'build');
	archive.directory('server', 'server');
	archive.directory('src', 'src');
	// archive.directory('tests', 'tests');

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

	if ('function' === typeof callback) {
		callback();
	}
}