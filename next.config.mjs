/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/woof-jump-lick',
	assetPrefix: '/woof-jump-lick/',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
