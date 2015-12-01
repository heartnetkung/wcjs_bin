var path = require('path');
var root = __dirname.replace(/([\\\/]node_modules[\\\/][^\\\/]+)/g, '');
var requirePath = path.join(root, '/bin/WebChimera.js.node');

try {
	module.exports = require(requirePath);
} catch (e) {
	throw new Error('Binary not found: ' + requirePath);
}
