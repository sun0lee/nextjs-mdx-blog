/** @type {import('next').NextConfig} */
const nextConfig = {}

const withPlugins = require("next-compose-plugins");
const { withContentlayer } = require('next-contentlayer')
const withPWA = require('next-pwa');

// module.exports = withContentlayer(nextConfig)


module.exports = withPlugins(
	[
		[
			withPWA,
			{
				pwa: {
					dest: "public",
				},
			},
		],
    [
      withContentlayer(nextConfig)
    ],
	],
	nextConfig
);