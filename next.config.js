/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["ui-avatars.com", "storage.googleapis.com"],
	},
	experimental: {
		images: {
			remotePatterns: [
				{
					protocol: "https",
					hostname: "**.xx.fbcdn.net",
				},
				{
					protocol: "https",
					hostname: "**.scdn.co",
				},
			],
		},
	},
};

module.exports = nextConfig
