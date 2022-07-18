/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["ui-avatars.com", "storage.googleapis.com"],
	},
};

module.exports = nextConfig
