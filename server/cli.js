
const config = require('./compiler-config.js');
const compiler = require('./compiler.js');
const chalk = require('chalk');

exports.test = function(args) {
	const Jasmine = require('jasmine');
	const jasmine = new Jasmine();
	jasmine.loadConfig(config.test);
	jasmine.onComplete(function(passed) {
		console.log(' --- ')
		if(passed) {
			console.log(chalk.green('All tests pass'));
		}
		else {
			console.log(chalk.red('At least one test failed'));
		}
	});
	jasmine.execute();
}


exports.dev = function(args) {
	compiler.webpack(config.webpack, function(error, success) {
		if (success) {
			console.log(chalk.green('Successfully compiled'));
		}
		else {
			console.log(chalk.red(error));
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


exports.watch = function(args) {
	const watch = require('node-watch');
	console.log('Watching src');
	watch('./src', { 
		recursive: true 
	}, function(evt, name) {
		console.log('%s changed.', name);
		exports.build();
	});
}

exports['--help'] = exports['-h'] = exports.help;
