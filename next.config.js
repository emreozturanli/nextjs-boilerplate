/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
	reactStrictMode: true,
	env: {
		BASE_API_URL: "/api",
	},
};

module.exports = withBundleAnalyzer(nextConfig);