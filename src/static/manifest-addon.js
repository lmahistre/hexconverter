const path = require('path');

const baseDir = path.resolve(__dirname+'/../..');

const config = require(baseDir+'/server/config.js');

const manifest = {
	"manifest_version": 2,
	"browser_action": {
		"default_icon": "img/logo-32.png",
		"default_popup": "index.html"
	}
};

const packageJson = require(baseDir+'/package.json');
manifest.name = config.app.name;
manifest.browser_action.default_title = config.app.name;
manifest.author = packageJson.author;
manifest.description = packageJson.description;
manifest.version = packageJson.version;
manifest.icons = {};
for (let i=0; i<config.app.iconFormats.length; i++) {
	manifest.icons[config.app.iconFormats[i]] = 'img/logo-'+config.app.iconFormats[i]+'.png';
}

module.exports = manifest;
