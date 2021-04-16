require('@babel/register');

module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	extends: [
		'airbnb',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'react/jsx-filename-extension': [
			'warn',
			{ extensions: ['.jsx', '.js', 'ts', 'tsx'] },
		],
		'max-len': ['error', { code: 120 }],
		'import/prefer-default-export': 'off',
		'import/no-named-as-default': 'off',
		'no-console': ['error', { allow: ['tron'] }],
    '@typescript-eslint/no-explicit-any': 'off',
		'import/no-useless-path-segments': 'off',
    'no-use-before-define': 'off',
		'react/forbid-prop-types': 'off',
		'react/jsx-props-no-spreading': 'off',
		'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-return-assign': 'off',
    'react/prop-types': 'off',
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'no-tabs': 0,
		'jsx-a11y/control-has-associated-label': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},
	settings: {
		'import/resolver': {
			webpack: {
				config: 'webpack.config.js',
			},
			node: {
				extensions: ['.js', '.jsx', '.json', '.json5', '.ts', '.tsx'],
			},
		},
	},
};
