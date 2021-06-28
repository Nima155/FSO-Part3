/* eslint-disable linebreak-style */
module.exports = {
	env: {
		browser: true,

		commonjs: true,

		es2021: true,
	},

	extends: "eslint:recommended",

	parserOptions: {
		ecmaVersion: 12,
	},

	rules: {
		"object-curly-spacing": ["error", "always"],
		"no-trailing-spaces": "error",
		indent: ["error", "tab"],
		eqeqeq: "error",
		"linebreak-style": ["error", "windows"],

		quotes: ["error", "double"],

		semi: ["error", "never"],
		"no-console": 0,
	},
}
