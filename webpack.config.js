const path = require('path');
const { webpack } = require('./alias-config');

const rules = [
	{
		test: /\.tsx?$/,
		exclude: /.test.tsx?$/,
    include: /src/,
		loader: 'babel-loader',
	},
  {
    test: /\.css?$/,
    use: ['css-loader'],
  }
];

module.exports = {
	target: 'web',
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: { rules },
	resolve: {
		alias: webpack,
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.json5'],
	},
	devServer: {
		contentBase: './',
		port: 5000,
	},
};
