/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	nextConfig,
	images: {
		domains: ["localhost"],
		formats: ["image/avif", "image/webp"],
	},
};
