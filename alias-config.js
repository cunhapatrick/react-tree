const path = require('path');

const dirArray = ['components', 'pages', 'store', 'utils', 'data'];

const webpack = {};
const jest = {};

dirArray.forEach((a) => {
	webpack[`@${a}`] = path.resolve(__dirname, 'src', a);
  jest[`^@${a}/(.*)$`] = `<rootDir>/src/${a}/$1`;
});

module.exports = {
	webpack,
  jest,
};
