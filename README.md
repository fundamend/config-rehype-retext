# config-rehype-retext

_config-rehype-retext_ is a configuration preset for [rehype-retext] used by [config-rehype] and the [fundamend.dev] ecosystem.

## Installation

Use your favorite Node.js package manager, for example [npm], like so:

    npm install --save-dev @fundamend/config-rehype-retext

... or [yarn], like so:

    yarn add --dev @fundamend/config-rehype-retext

## Usage

In your [.rehyperc.js], import _config-rehype-retext_ and add it to the plugins array, like so:

```js
const retext = require('@fundamend/config-rehype-retext');

const plugins = [retext];
const settings = {};

module.exports = {
	plugins: plugins,
	settings: settings,
};
```

## License

[MIT]

[fundamend.dev]: https://fundamend.dev
[mit]: https://choosealicense.com/licenses/mit/
[npm]: https://www.npmjs.com/
[config-rehype]: https://github.com/fundamend/config-rehype
[rehype-retext]: https://github.com/rehypejs/rehype-retext
[.rehyperc.js]: https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md
[yarn]: https://yarnpkg.com/
