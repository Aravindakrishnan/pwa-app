module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,html,json,js}'
	],
	swDest: 'service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};