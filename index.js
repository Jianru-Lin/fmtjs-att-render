var Vast = require('./lib/Vast')

function render(att, options) {
	return Vast.toText(att, {})
}

module.exports = exports = render