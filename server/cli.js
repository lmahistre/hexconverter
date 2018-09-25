
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


exports.css = function(args) {
	compiler.css(config.css, function(error, success) {
		if (success) {
			console.log('CSS successfully compiled');
		}
		else {
			console.log(error);
		}
	});
}


/**
 * Compile JS
 */
exports.js = function(args) {
	// config.js.mode = 'development';
	config.js.optimization.minimize = false;
	compiler.js(config.js, function(error, success) {
		if (success) {
			console.log('JS successfully compiled');
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
	// config.js.mode = 'production';
	config.js.optimization.minimize = true;
	compiler.js(config.js, function(error, success) {
		if (success) {
			console.log('JS successfully compiled');
		}
		else {
			console.log(error);
		}
		compiler.css(config.css, function(error, success) {
			if (success) {
				console.log('CSS successfully compiled');
			}
			else {
				console.log(error);
			}
			exports.test();
		});
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
