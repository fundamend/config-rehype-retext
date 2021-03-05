const retext = require('rehype-retext');
const retextPreset = require('@fundamend/config-retext');

const plugins = [[retext, retextPreset]];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings,
};
