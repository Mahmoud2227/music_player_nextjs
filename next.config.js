/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["ui-avatars.com", "storage.googleapis.com", "scontent-cdg2-1.xx.fbcdn.net"],
	},
};

module.exports = nextConfig
