
const express = require('express');
const app = express();

const path = require('path');

module.exports = function(callback) {

	/**
	 * HTML
	 */
	app.get('/', function (req, res) {
		res.sendFile(path.resolve(__dirname+'/../build/index.html'));
	});


	// Static files
	app.use('/', express.static(path.resolve(__dirname+'/../build')));

	const port = 3007;

	app.listen(port);

	console.log('Server is listening on port '+port);
	if (callback && typeof callback === 'function') {
		callback();
	}
}