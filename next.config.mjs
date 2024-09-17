/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/woof-jump-lick',
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

export default nextConfig;
