module.exports = {
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	plugins: ['@next/eslint-plugin-next'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	rules: {
		'no-reserved-keywords': 0,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
