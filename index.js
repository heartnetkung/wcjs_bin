var path = require('path');
var requirePath = path.join(process.execPath, '../WebChimera.js.node');

try {
	module.exports = require(requirePath);
} catch (e) {
	console.log(e);
	throw new Error('Binary not found: ' + requirePath);
}
