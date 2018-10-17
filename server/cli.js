
const config = require('./compiler-config.js');
const compiler = require('./compiler.js');

exports.test = function(args) {
	const Jasmine = require('jasmine');
	const jasmine = new Jasmine();
	jasmine.loadConfig(config.test);
	jasmine.onComplete(function(passed) {
		console.log(' --- ')
		if(passed) {
			console.log('All tests pass');
		}
		else {
			console.log('At least one test failed');
		}
	});
	jasmine.execute();
}


exports.dev = function(args) {
	compiler.webpack(config.webpack, function(error, success) {
		if (success) {
			console.log('Successfully compiled');
		}
		else {
			console.log(error);
		}
	});
}


exports.help = function(args) {
	console.log('Usage: github-todo [OPTION]');
	console.log('Options:');
	for (let k in exports) {
		console.log ('  '+k+ '');
	}
}


exports.build = function(args) {
	compiler.webpack(config.webpack, function(error, success) {
		if (success) {
			console.log('Successfully compiled');
		}
		else {
			console.log(error);
		}
		exports.test();
	});
}


exports.start = function(args) {
	require('./server.js')();
}


exports.publish = function(args) {
	const zip = require('./zip.js');
	zip.addon(function() {
		zip.source();
	});
}


exports['--help'] = exports['-h'] = exports.help;
