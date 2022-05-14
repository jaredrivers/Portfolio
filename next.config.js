/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	nextConfig,
	images: {
		domains: [
			"localhost",
			"strapi-portfolio-admin-jared.herokuapp.com",
			"jaredriver.tech",
			"www.jaredriver.tech",
			"https://www.jaredriver.tech",
			"jaredriver.com",
			"www.jaredriver.com",
			"https://www.jaredriver.com",
			"res.cloudinary.com",
			"jared-river-portfolio-bucket.s3.us-east-1.amazonaws.com",
			"jared-river-portfolio-bucket.s3.amazonaws.com",
		],
		formats: ["image/avif", "image/webp"],
	},
};
